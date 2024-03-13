import React from 'react';
import { Link } from 'react-router-dom';
import { userData } from '../data/userData';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 flex flex-col gap-8 md:py-15 lg:py-20">
      <h1 className="text-5xl sm:text-7xl text-[--secondary] font-extrabold md:text-8xl md:text-left lg:text-9xl">
        About
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="font-bold text-[--accent]">Personal</h1>
            <div className="space-y-1 text-[--secondary]">
              <p>• {userData.name}</p>
              <p>• {userData.occupation}</p>
              <p>• {userData.address}</p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-[--accent]">Socials</h1>
            <div className="space-y-1 text-[--secondary]">
              {userData.socials.map((social, idx) => (
                <Link
                  key={idx}
                  to={social.url}
                  className="w-[100px] flex items-center gap-2 group relative"
                >
                  <p>{social.name}</p>
                  <div className="absolute right-0 group-hover:-right-2.5">
                    <IoIosArrowRoundForward size={20} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-2 space-y-8 order-first md:order-last">
          <p className="text-xl tracking-wider text-[--secondary]">
            {userData.about.description}
          </p>
          <div className="space-y-4 flex flex-col items-center justify-center">
            <h1 className="self-start font-bold text-[--accent]">Tools</h1>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {userData.tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="size-[80px] sm:size-[90px] flex items-center justify-center bg-[#ffffff] drop-shadow-xl rounded-md"
                >
                  <p className="text-[#000000] text-5xl">{tool.logo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
