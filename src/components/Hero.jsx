import React, { useEffect } from 'react';
import Aos from 'aos';
import profile from '../assets/profile.png';
import { Link } from 'react-router-dom';
import { userData } from '../data/userData';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { PiArrowElbowRightUpThin } from 'react-icons/pi';

export const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4">
      <div data-aos="fade-right" className="space-y-12">
        <p className="text-center space-y-2 text-3xl text-[--secondary] font-bold md:text-left md:text-4xl lg:text-5xl">
          <span>Hi there!</span>
          <span className="flow-root">I'm Jansen Gabrillo,</span>
          <span className="flow-root text-sm text-[--accent]">
            a 20-year-old BSIT student at the Dominican College of Tarlac.
          </span>
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            to="/contact"
            className="font-bold text-[--primary] hover:text-[--secondary] bg-[--secondary] hover:bg-[--primary] py-2 px-4 border border-[--secondary]"
          >
            Get in touch, Let's talk
          </Link>
          <Link
            to="https://www.facebook.com/jnsngbrll"
            className="w-[80px] h-[40px] flex items-center justify-center border border-[--secondary] relative group"
          >
            <span class="absolute transform md:translate-x-[30px] group-hover:translate-x-0 font-bold text-[--secondary] bg-[--primary]">
              Follow
            </span>
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="relative cursor-pointer group order-first md:order-last"
      >
        <div>
          <img src={profile} alt="" className="drop-shadow-2xl" />
          <div className="absolute top-0 right-0 text-7xl text-[--secondary] group-hover:opacity-0 animate-pulse group-hover:animate-none">
            <p className="text-xl font-bold">Hover Me</p>
            <PiArrowElbowRightUpThin />
          </div>
        </div>
        <div className="absolute top-0 opacity-0 group-hover:opacity-100 flex flex-col items-center gap-4 text-xl text-[--secondary] md:top-40 md:-left-9 md:flex-row">
          <Link to={userData.socials[0].url} className="text-[#316FF6]">
            <FaFacebook />
          </Link>
          <Link to={userData.socials[1].url} className="text-[#0077b5]">
            <FaLinkedin />
          </Link>
          <Link to={userData.socials[2].url} className="text-[--secondary]">
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};
