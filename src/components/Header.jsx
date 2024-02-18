import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { userData } from '../data/userData';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoMoon, IoSunny } from 'react-icons/io5';
import useLocalStorage from 'use-local-storage';
import { IoIosArrowRoundDown } from 'react-icons/io';

export const Header = () => {
  const [theme, setTheme] = useLocalStorage('dark', 'light');
  const location = useLocation();

  useEffect(() => {
    document.body.setAttribute('color-scheme', theme);
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const navItems = [
    { label: 'About', link: '/about' },
    { label: 'Projects', link: '/projects' },
    { label: 'Experience', link: '/experience' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <h1 className="text-[--secondary] font-bold">JNSN</h1>
          </Link>
        </div>

        <div className="flex items-center gap-8 font-semibold">
          {navItems.map((nav, index) => (
            <Link
              key={index}
              to={nav.link}
              className={`flex items-center gap-1 ${
                location.pathname === nav.link
                  ? 'text-[--secondary]'
                  : 'text-[--accent]'
              }`}
            >
              {nav.label}
              {location.pathname === nav.link ? (
                <IoIosArrowRoundDown size={20} />
              ) : null}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-4 text-[--accent]">
            <Link to={userData.socials.facebook}>
              <FaFacebook />
            </Link>
            <Link to={userData.socials.linkedin}>
              <FaLinkedin />
            </Link>
            <Link to={userData.socials.github}>
              <FaGithub />
            </Link>
          </div>
          <div onClick={handleSwitchTheme}>
            {theme === 'light' ? (
              <IoMoon className="text-[--secondary]" />
            ) : (
              <IoSunny className="text-[#FFFF00]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
