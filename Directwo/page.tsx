"use client";
import React from 'react';

const Profile  = () =>{
    return (
        <>
        </>
    );
};


const Details = () => {
    return (
        <div className="w-[822px] h-[398px] relative bg-[#3b3b3b] border-2 border-blue-500 flex flex-col justify-start items-center text-center overflow-hidden">
            <div className="absolute top-0 w-full bg-[#4b4b4b]">
                <h1 className="m-0 text-center p-4 bg-[#4b4b4b] text-white text-3xl">Dr Pragma Kar</h1>
            </div>
            <div className="absolute top-[20%] w-full h-[65%] bg-[#5b5b5b] flex flex-col justify-center items-center text-center text-white text-lg">
                <h3 className="text-2xl p-3">Assistant Professor, PhD, Jadavpur University</h3>
                <p className='p-3'>Founder &amp; Director, Pervasive Sensing &amp; Intelligent Assistive Systems (PERSISST) Lab</p>
                <p className='p-3'>Associate Faculty, Center for Design and New Media (CDNM)</p>
                <p className='p-3'>Indraprastha Institute of Information Technology (IIIT) Delhi</p>
            </div>
            <div className="absolute top-[85%] w-[50%] h-[15%] grid grid-cols-4 gap-1 justify-items-center items-center bg-[#040f31] border-2 border-[#3694ff] box-border">
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
    );
};

export default Details;
