import React from 'react';
import { Link } from 'react-router-dom';
import { userData } from '../data/userData';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4 flex flex-col gap-10">
      <h1 className="text-9xl text-[--secondary] font-extrabold">About</h1>
      <div className="flex gap-x-20 mt-10">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="font-bold text-[--accent]">Personal</h1>
            <div className="space-y-1 text-[--secondary]">
              {userData.personal.map((pers) => (
                <p className="inline-block">• {pers.label}</p>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-[--accent]">Socials</h1>
            <div className="space-y-1 text-[--secondary]">
              {userData.socials.map((social, index) => (
                <Link
                  key={index}
                  to={social.url}
                  className="relative w-[100px] flex items-center gap-2 group"
                >
                  <p>{social.name}</p>
                  <div className="absolute right-0 group-hover:right-[-10px]">
                    <IoIosArrowRoundForward size={20} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-xl tracking-wider text-[--secondary]">
              I'm Jansen Gabrillo, a 20-year-old BSIT student at the Dominican
              College of Tarlac. I enjoy building web applications and
              practicing new technologies to enhance my skills in coding.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-[--accent]">Tools</h1>
            <div className="grid grid-cols-7 gap-8">
              {userData.tools.map((tool) => (
                <div className="size-[90px] flex items-center justify-center bg-[#ffffff] drop-shadow-xl rounded-md">
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
