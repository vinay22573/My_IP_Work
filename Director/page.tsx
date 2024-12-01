"use client";
import React from 'react';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { main } from 'framer-motion/client';
function Director() {
  return (
    <main>
      <div className="bg-[#010114] h-screen overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Ellipse 1 Left */}
          <img
            src="/bg/Ellipse_Left.png"
            alt="ellipse"
            className="absolute bottom-0 left-0 z-10"
          />
          {/* Ellipse 2 Right */}
          <img
            src="/bg/Ellipse_Right.png"
            alt="ellipse"
            className="absolute bottom-0 right-0 z-10"
          />
          {/* Ellipse 3 down */}
          <img
            src="/bg/Ellipse_down.png"
            alt="ellipse"
            className="absolute bottom-0 left-0 w-full h-auto z-10"
          />
          {/* Vector layer */}
          <img
            src="/bg/Vector.png"
            alt="vector"
            className="absolute top-[25%] md:top-[20%] lg:top-[30%] left-[45vw] md:left-[40vw] lg:left-[50vw] transform -translate-x-1/2 -translate-y-1/2 z-20"
          />
        </div>
        <div className="relative z-30 pt-[15vh]"> {/* Reserve space for navbar */}
          <Type3 />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full  p-4">
            <div className="relative col-span-1 lg:col-span-2 h-full min-h-[450px]">
              <div className="absolute top-[10%] w-full h-[15%] ">
                <h1 className="m-0 text-center p-4  text-white text-5xl">Dr Pragma Kar</h1>
              </div>
              <div className="absolute top-[15%] w-full h-[60%]  flex flex-col justify-center items-center text-center text-white text-xl">
                <h3 className="text-4xl text-[#9961D9] p-4">Assistant Professor, PhD, Jadavpur University</h3>
                <p className='pl-3 pr-5 pt-2 pb-5 text-1.5xl'>Founder &amp; Director, Pervasive Sensing &amp; Intelligent Assistive Systems (<span className="text-[#9961D9]">PERSISST</span>) Lab</p>
                <p className='pl-3 pr-5 pt-2 pb-5 text-1.5xl'>Associate Faculty, Center for Design and New Media (<span className="text-[#9961D9]">CDNM</span>)</p>
                <p className='pl-3 pr-5 pb-5 pt-2 text-1.5xl'>Indraprastha Institute of Information Technology (<span className="text-[#9961D9]">IIIT</span>) Delhi</p>
              </div>
              <div className='absolute top-[75%] w-full h-20% flex justify-center items-center'>
              <div className="w-[50%] h-[20%] grid grid-cols-4 gap-1 justify-items-center items-center ">
                <div className="link">
                  <a href="https://www.linkedin.com/in/pragma-kar-9419143a/">
                    <img className="w-10 h-10 block mb-1" src="/linkedin.png" alt="LinkedIn Icon" />
                  </a>
                </div>
                <div className="link">
                  <a href="https://scholar.google.com/citations?user=WSX1ovsAAAAJ&hl=en">
                    <img className="w-10 h-10 block mb-1" src="/googlescholar.png" alt="googlescholar LinkedIn Icon" />
                  </a>
                </div>
                <div className="link">
                  <a href="https://iiitd.irins.org/profile/554054">
                    <img className="w-10 h-10 block mb-1" src="/irins.png" alt="irins Icon" />
                  </a>
                </div>
                <div className="link">
                  <a href="https://www.iiitd.ac.in/pragma">
                    <img className="w-10 h-10 block mb-1" src="/website.png" alt="website Icon" />
                  </a>
                </div>
              </div>
              </div>
            </div>
            <div className="col-span-1 min-h-[450px]">
              <img src="/Mamwithbg.png" alt="mam" className='w-full h-full' />
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
const Type3 = () => {
  const words = [
    {
      text: " ",
      className: "text-purple-500",
    },
    {
      text: "About",
    },
    {
      text: "Lab",
      className: "text-purple-500",
    },
    {
      text: "Director",
      className: "text-purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-4rem  h-[10rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}


export default Director;