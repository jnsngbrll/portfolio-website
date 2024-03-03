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
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h1 className="text-9xl text-[--secondary] font-extrabold">Projects</h1>
      <div className="my-10 space-y-8">
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
            <div className="w-[300px] p-8">
              <h1 className="text-3xl text-[--secondary] font-bold">
                {project.name}
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
