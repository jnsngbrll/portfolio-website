import React from 'react';
import { Link } from 'react-router-dom';
import { userData } from '../data/userData';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { LuUser2, LuPhone } from 'react-icons/lu';
import { MdOutlineLocationOn, MdOutlineEmail } from 'react-icons/md';

export const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">
      <h1 className="text-9xl text-[--secondary] font-extrabold mt-20">
        About
      </h1>
      <div className="flex gap-60 my-10">
        <div className="space-y-8">
          <div className="space-y-2">
            <div>
              <h1 className="text-[--accent] border-b inline-block">
                Personal
              </h1>
            </div>
            <div className="space-y-1 text-[--secondary]">
              <p className="flex items-center gap-2">
                <LuUser2 size={15} /> {userData.designation}
              </p>
              <p className="flex items-center gap-2">
                <LuPhone size={15} /> {userData.phone}
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <MdOutlineLocationOn size={15} />
                </span>
                {userData.address}
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <MdOutlineEmail size={15} />
                </span>
                {userData.email}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <h1 className="text-[--accent] border-b inline-block">Socials</h1>
            </div>
            {userData.socials.map((social, index) => (
              <div className="space-y-1 text-[--secondary]">
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
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-xl text-[--secondary]">
              I'm Jansen Gabrillo, a 20-year-old BSIT student at the Dominican
              College of Tarlac. I enjoy building web applications and
              practicing new technologies to enhance my skills in coding.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="text-[--accent] border-b inline-block">Tools</h1>
            </div>
            <div className="grid grid-cols-6 gap-8">
              {userData.tools.map((tool) => (
                <div className="w-[90px] h-[90px] flex items-center justify-center bg-[#ffffff] drop-shadow-xl p-4 rounded-md">
                  <p className="text-[#000000] text-4xl">{tool.logo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
