// components/EventCard.ts
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import "@/styles/event-card.css";

type EventCardProps = {
  event: {
    type: string;
    title: string;
    description: string;
    date: string;
    location: string;
    background_image_url: string;
    learn_more_link: string;
  };
};

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="w-[80vw] lg:h-[60vh] relative bg-container bg-container-overlay border-2 border-violet-500 grid grid-rows-[2fr_3fr_1fr] justify-items-center gap-4 rounded-[25px]" style={{ backgroundImage: `url(${event.background_image_url})`, }}>
      {/* Upcoming Events Section */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full">
          <div className="flex justify-center items-center col-span-1 lg:col-span-1 md:col-span-1">
            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-semibold rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">
              {event.type}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-[90%] p-6">
        <h1 className="text-4xl font-bold mb-3 text-white">{event.title}</h1>
        <p className="mb-4 text-white text-lg">{event.description}</p>
        <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-xl px-5 py-2.5 mb-2">
          <Link href={event.learn_more_link}>Learn more</Link>
        </button>
      </div>

      {/* Bottom Section */}
      <div className="w-full pt-2 pb-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div></div>
          <div className="col-span-1 flex flex-col md:flex-row md:items-center md:gap-4 md:space-y-0">
            <div className="text-white border-[3px] border-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center md:ml-1 mr-1 whitespace-nowrap">
              <img src="https://thumbs.dreamstime.com/b/pin-location-icon-vector-iconic-design-symbol-transparency-grid-94181514.jpg" alt="calendar_icon" className="w-6 h-6 me-2" />
              {event.date}
            </div>
            <div className="text-white border-[3px] border-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center md:ml-1 mr-1 mt-2 md:mt-0 whitespace-nowrap">
              <img src="https://thumbs.dreamstime.com/b/pin-location-icon-vector-iconic-design-symbol-transparency-grid-94181514.jpg" alt="location_icon" className="w-6 h-6 me-2" />
              {event.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
