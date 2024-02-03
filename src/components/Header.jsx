import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userData } from '../data/userData';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoMoon, IoSunny } from 'react-icons/io5';
import useLocalStorage from 'use-local-storage';

export const Header = () => {
  const [theme, setTheme] = useLocalStorage('dark', 'light');

  useEffect(() => {
    document.body.setAttribute('color-scheme', theme);
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <h1 className="text-[--secondary] font-bold">JNSN</h1>
          </Link>
        </div>

        <div className="flex items-center gap-8 text-[--accent] font-semibold">
          <Link to="/about">About</Link>
          <Link>Projects</Link>
          <Link>Experience</Link>
          <Link>Contact</Link>
        </div>

        <div className="flex items-center gap-8 text-lg">
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
          <div onClick={handleSwitchTheme}>
            {theme === 'light' ? (
              <IoMoon className="text-[--accent]" />
            ) : (
              <IoSunny className="text-[#FFFF00]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
