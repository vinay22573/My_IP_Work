// components/EventSlider.tsx
'use client';
import React, { useState } from 'react';
import { CircleChevronLeft, CircleChevronRight, CircleDot, Circle } from 'lucide-react';
import EventCard from './EventCard'; // Import EventCard
import '@/styles/img-slider-img.css'; // Import existing CSS for the slider

type EventSliderProps = {
  events: {
    type: string;
    title: string;
    description: string;
    date: string;
    location: string;
    background_image_url: string;
    learn_more_link: string;
  }[]; // Event array prop
};

function EventSlider({ events }: EventSliderProps) {
  const [eventIndex, setEventIndex] = useState(0); // Manage the current event index

  // Navigate to the next event
  function nextSlide() {
    setEventIndex((eventIndex + 1) % events.length);
  }

  // Navigate to the previous event
  function prevSlide() {
    setEventIndex((eventIndex - 1 + events.length) % events.length);
  }

  return (
    <section aria-label='Event Carousel' style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', display: 'flex', overflow: 'hidden' }}>
        {/* Render EventCard for each event */}
        {events.map((event, index) => (
          <div
            key={index}
            aria-hidden={eventIndex !== index}
            className="img-slider-slide" // Apply CSS class for slider styling
            style={{
              translate: `${-100 * eventIndex}%`, // Move the current event into view
              transition: 'transform 0.3s ease', // Add smooth transition for slides
            }}
          >
            {/* Use EventCard inside the image slider structure */}
            <EventCard event={event} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className='img-slider-btn' style={{ left: 0 }} aria-label='View Previous Slide'>
        <CircleChevronLeft />
      </button>
      <button onClick={nextSlide} className='img-slider-btn' style={{ right: 0 }} aria-label='View Next Slide'>
        <CircleChevronRight />
      </button>

      {/* Dot Navigation */}
      <div
        style={{
          position: 'absolute',
          bottom: '0.5rem',
          left: '50%',
          translate: '(-50%, 0)',
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        {/* Render dots for navigation */}
        {events.map((_, index) => (
          <button key={index} aria-label={`Go to Slide ${index + 1}`} className='img-slider-dot-btn' onClick={() => setEventIndex(index)}>
            {index === eventIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
          </button>
        ))}
      </div>
    </section>
  );
}

export default EventSlider;
