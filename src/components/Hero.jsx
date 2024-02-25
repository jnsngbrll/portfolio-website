import React from 'react';
import profile from '../assets/profile.png';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className="flex items-center justify-between my-48">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <p className="text-5xl text-[--secondary] font-bold">Hi there!</p>
          <p className="text-xl text-[--secondary] font-bold">
            I'm
            <span className="ml-2 text-5xl text-[--secondary] font-bold">
              Jansen Gabrillo
            </span>
            ,
          </p>
          <p className="text-[--accent]">
            a 20-year-old BSIT student at the Dominican College of Tarlac.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="text-[--primary] font-bold bg-[--secondary] py-2 px-4 border border-[--secondary] rounded"
          >
            Get in touch, Let's talk
          </Link>
          <Link
            to="https://www.facebook.com/jnsngbrll"
            className="flex items-center gap-2 py-2 px-4 text-[--secondary] font-bold border border-[--secondary] rounded"
          >
            <p>Follow</p>
            <FaRegHeart />
          </Link>
        </div>
      </div>
      <div>
        <img src={profile} alt="" className="drop-shadow-2xl" />
      </div>
    </div>
  );
};
