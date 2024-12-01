"use client"
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
function Lab() {
    return (
        <>
        <div className="bg-[#010114] h-screen overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full">
                {/* Ellipse layer */}
                <img 
                    src="/bg/Ellipse_8.png" 
                    alt="ellipse" 
                    className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-10" 
                />
                
                {/* Vector layer */}
                <img 
                    src="/bg/Vector.png" 
                    alt="vector" 
                    className="absolute top-[25%] md:top-[20%] lg:top-[30%] left-[45vw] md:left-[40vw] lg:left-[50vw] transform -translate-x-1/2 -translate-y-1/2 z-20" 
                />
            </div>
            <div className="relative z-30 pt-[10vw]"> {/* Reserve space for navbar */}
                    <BG2 />
                </div>
            <div className="relative top-[100%]">
            <Director/>
            </div>
        </div>
        
        </>
    );
}


const Director = () => {
    return (
      <>
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
                  <p className='pl-3 pr-5 pt-2 pb-5 text-1.5xl'>Founder &amp; Director, Pervasive Sensing &amp; Intelligent Assistive Systems (PERSISST) Lab</p>
                  <p className='pl-3 pr-5 pt-2 pb-5 text-1.5xl'>Associate Faculty, Center for Design and New Media (CDNM)</p>
                  <p className='pl-3 pr-5 pb-5 pt-2 text-1.5xl'>Indraprastha Institute of Information Technology (IIIT) Delhi</p>
                </div>
                <div className='absolute top-[75%] w-full h-20% flex justify-center items-center'>
                <div className="w-[50%] h-[20%] grid grid-cols-4 gap-1 justify-items-center items-center ">
                  <div className="link">
                    <a href="#">
                      <img className="w-10 h-10 block mb-1" src="/linkedin.png" alt="LinkedIn Icon" />
                    </a>
                  </div>
                  <div className="link">
                    <a href="#">
                      <img className="w-10 h-10 block mb-1" src="/linkedin.png" alt="LinkedIn Icon" />
                    </a>
                  </div>
                  <div className="link">
                    <a href="#">
                      <img className="w-10 h-10 block mb-1" src="/linkedin.png" alt="LinkedIn Icon" />
                    </a>
                  </div>
                  <div className="link">
                    <a href="#">
                      <img className="w-10 h-10 block mb-1" src="/linkedin.png" alt="LinkedIn Icon" />
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
  
      </>
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
  

const BG2 = () => {
    return (
        <>
            
            
            <Type />
            <p className=" pt-3 font-normal text-center md:text-lg  max-w-screen-lg mx-auto">
                Our work spans a variety of domains, from smart entertainment to education, always driven by the core belief that pervasive, intelligent digital assistants—powered by secure, ubiquitous physiological and behavioral sensing—can make a significant impact. By utilizing state-of-the-art AI techniques, learning approaches, and bio-inspired models, we aim to address global, societal, and personal challenges, making life smarter, healthier, and more connected.
            </p>
            
           
        </>

    );
}


const Type = () => {
    const words = [
        {
            text: " ",
            className: "text-purple-500",
        },
        {
            text: "About",
        },
        {
            text: "PerSIsst",
            className: "text-purple-500",
        },
        {
            text: "Lab",
            className: "text-purple-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[15rem]  ">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}

const Type2 = () => {
    const words = [
        {
            text: " ",
            className: "text-purple-500",
        },
        {
            text: "Our",
        },
        {
            text: "Purpose",
            className: "text-purple-500",
        },

    ];
    return (
        <div className="flex flex-col items-center justify-center h-[15rem]  ">
            <TypewriterEffectSmooth words={words} />
            <p className="  font-normal text-center md:text-lg  max-w-screen-lg mx-auto">
                The Lab aims at facilitating cutting-edge research in the field of Ubiquitous Computing, Pervasive Sensing, Artificial Intelligence and allied domains to solve real-world problems in the interdisciplinary domains of Cognitive Psychology, Health & Wellness, Smart Space, Inclusive and Accessible Assistive System design, and related areas.
            </p>
        </div>
    );
}





export default Lab;
