"use client";
import React from 'react'
import Link from 'next/link'
import {FlipWords} from './ui/flip-words'
import Image from 'next/image'
   

const Hero = () => {
    const words = ["Pervasive Sensing", "Intelligent", "Assistive"];

    return (
        <div className='relative h-auto sm:h-[55rem] md:h-[55rem] w-full rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto pt-0 md:py-0'>
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-[0.75] "
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src="/bg/1bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='relative z-10 max-w-5xl mx-auto p-4 w-full text-center'>
                <p className="text-base md:text-3xl mt-4 text-white font-bold inter-var text-center">
                Crafting Smart Living Through

                </p>

                <div className='flex items-center justify-center mt-0 md:mt-0 text-4xl md:text-6xl font-bold whitespace-nowrap'>
                    <h1>
                        <FlipWords words={words} />
                    </h1> 
                    <h1 className='pl-1'>Systems</h1> {/* Changed padding to pl-1 */}
                </div>

                <p className="text-base md:text-lg px-1rem mt-4 text-white font-normal inter-var text-center">
                The Pervasive Sensing & Intelligent Assistive Systems (PerSIsst) Lab is a dynamic research space dedicated to innovating assistive technologies that enhance smart living. The interdisciplinary research focuses on harnessing cutting-edge research to create seamless, user-centric applications that address real-world challenges in health, wellness, and daily living.  
                </p> 
                    
                <div className="m-7 flex justify-center text-center">
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <Image
                                src='/images/PerSIsst_Final 1.svg'
                                alt='persisst logo'
                                width={25}
                                height={100}
                                className="mr-2"
                            /> 
                            <Link href={"/About/Lab"}>     
                                Explore Research 
                            </Link>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
