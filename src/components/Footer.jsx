import React from 'react';
import { Link } from 'react-router-dom';
import { userData } from '../data/userData';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 border-t">
      <div className="flex items-center justify-between">
        <h1 className="text-[--secondary]">JNSN.</h1>
        <div className="flex items-center gap-4 text-[--accent]">
          <Link to={userData.socialLinks.facebook}>
            <FaFacebook />
          </Link>
          <Link to={userData.socialLinks.linkedin}>
            <FaLinkedin />
          </Link>
          <Link to={userData.socialLinks.github}>
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};
