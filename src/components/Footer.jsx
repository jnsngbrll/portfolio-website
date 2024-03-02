import React from 'react';
import { Link } from 'react-router-dom';
import { userData } from '../data/userData';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 border-t border-[--accent]">
      <div className="flex items-center justify-between">
        <h1 className="text-[--secondary] font-bold">JNSN.</h1>
        <div className="flex items-center gap-4 text-[--accent]">
          <Link to={userData.socials[0].url}>
            <FaFacebook />
          </Link>
          <Link to={userData.socials[1].url}>
            <FaLinkedin />
          </Link>
          <Link to={userData.socials[2].url}>
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};
