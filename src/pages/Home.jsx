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
    <div className="max-w-6xl mx-auto py-20">
      <div className="space-y-20 md:space-y-40">
        <Hero />
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4 md:flex-row justify-between px-4">
            <h1
              data-aos="fade-right"
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[--secondary] font-extrabold"
            >
              Projects
            </h1>
            <Link
              data-aos="fade-left"
              to="/projects"
              onClick={() => window.scrollTo(0, 0)}
              className="w-[90px] h-[40px] flex items-center justify-center border border-[--secondary] relative group"
            >
              <span className="absolute transform md:translate-x-[30px] group-hover:translate-x-0 font-bold text-[--secondary] bg-[--primary]">
                View All
              </span>
            </Link>
          </div>
          <div className="space-y-4 md:space-y-8 px-0 md:px-4">
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
                <div className="w-[300px] p-4 md:p-8">
                  <h1 className="text-xl text-[--secondary] font-bold md:text-3xl">
                    {project.name}
                  </h1>
                  <p className="text-[--accent]">{project.description}</p>
                </div>
                <p className="absolute right-0 bottom-8 text-3xl text-[--accent] font-bold md:text-5xl">
                  0{index + 1}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
