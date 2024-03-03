import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { userData } from '../data/userData';
import { Link } from 'react-router-dom';
import Aos from 'aos';

export const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Hero />
      <div className="space-y-8 py-20">
        <div className="flex items-center justify-between">
          <h1
            data-aos="fade-right"
            className="text-9xl text-[--secondary] font-extrabold"
          >
            Projects
          </h1>
          <Link
            data-aos="fade-left"
            to="/projects"
            onClick={() => window.scrollTo(0, 0)}
            className="w-[90px] h-[40px] flex items-center justify-center border border-[--secondary] relative group"
          >
            <span className="absolute transform translate-x-[30px] group-hover:translate-x-0 font-bold text-[--secondary] bg-[--primary]">
              View All
            </span>
          </Link>
        </div>
        {userData.projects.map((project, index) => (
          <Link
            data-aos="fade-up"
            key={index}
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
