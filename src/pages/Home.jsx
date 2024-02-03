import React from 'react';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';


export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Projects/>
    </div>
  );
};
