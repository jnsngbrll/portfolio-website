import React, { useEffect } from 'react';
import { userData } from '../data/userData';
import { Link } from 'react-router-dom';
import Aos from 'aos';

export const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 md:py-15 lg:py-20">
      <h1 className="text-center text-5xl px-4 sm:text-7xl text-[--secondary] font-extrabold md:text-8xl md:text-left lg:text-9xl">
        Projects
      </h1>
      <div className="mt-8 space-y-4 md:space-y-8 px-0 md:px-4">
        {userData.projects.map((project, index) => (
          <Link
            data-aos="fade-up"
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
            <div className="w-[300px] p-4 md:p-8">
              <h1 className="text-xl text-[--secondary] font-bold md:text-3xl">
                {project.name}
              </h1>
              <p className="text-[--accent]">{project.description}</p>
            </div>
            <p className="absolute right-4 bottom-4 text-3xl text-[--accent] font-bold md:text-5xl">
              0{index + 1}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
