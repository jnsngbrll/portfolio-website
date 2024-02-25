import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { userData } from '../data/userData';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <Hero />
      <div className="flex flex-col gap-8 py-20">
        <div className="flex items-center justify-between">
          <h1 className="text-9xl text-[--secondary] font-extrabold">
            Projects
          </h1>
          <Link
            to="/projects"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2 hover:gap-4 text-[#000000] font-semibold bg-[#ffffff] drop-shadow-md py-2 px-8 rounded"
          >
            View All
            <IoIosArrowRoundForward size={20} />
          </Link>
        </div>
        {userData.projects.map((project, index) => (
          <Link
            key={index}
            data-aos="zoom-in-up"
            to={project.link}
            className="relative flex bg-gradient-to-r from-[--accent] to-[--primary] group"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt=""
                className="w-[400px] transition-all duration-1000 group-hover:scale-125"
              />
            </div>
            <div className="w-[300px] p-8">
              <h1 className="text-3xl text-[--secondary] font-bold">
                {project.title}
              </h1>
              <p className="text-[--accent]">{project.description}</p>
            </div>
            <p className="absolute right-0 bottom-8 text-5xl text-[--accent] font-bold">
              0{index + 1}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
