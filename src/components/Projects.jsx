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
    <div className="flex flex-col gap-8 py-20">
      <h1 className="text-9xl text-[--secondary] font-extrabold">Projects</h1>
      {userData.projects.map((project, index) => (
        <Link
          data-aos="zoom-in-up"
          to={project.link}
          className="relative flex bg-gradient-to-r from-[--accent] to-[--primary] group"
        >
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt=""
              className="w-[500px] group-hover:scale-125"
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
  );
};
