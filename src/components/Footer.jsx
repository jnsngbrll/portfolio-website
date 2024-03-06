import React from 'react';
import { Link } from 'react-router-dom';
import { userData } from '../data/userData';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between border-t border-[--accent] py-4">
        <h1 className="text-[--accent] font-bold">JNSN.</h1>
        <div className="flex items-center gap-4 text-lg text-[--accent]">
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
