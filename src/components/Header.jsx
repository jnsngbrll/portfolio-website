import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import useLocalStorage from 'use-local-storage';
import { IoIosArrowRoundDown } from 'react-icons/io';
import Aos from 'aos';

export const Header = () => {
  const [theme, setTheme] = useLocalStorage('dark', 'light');
  const location = useLocation();

  useEffect(() => {
    document.body.setAttribute('theme', theme);
  }, [theme]);

  const navItems = [
    { label: 'About', link: '/about' },
    { label: 'Projects', link: '/projects' },
    { label: 'Experience', link: '/experience' },
    { label: 'Contact', link: '/contact' },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div data-aos="fade-down" className="max-w-6xl mx-auto p-4 md:pt-10">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <h1 className="text-[--secondary] font-bold">JNSN</h1>
          </Link>
        </div>
        <div className="hidden sm:flex items-center gap-8 font-semibold">
          {navItems.map((nav, idx) => (
            <Link
              key={idx}
              to={nav.link}
              className={`flex items-center gap-1 ${
                location.pathname === nav.link
                  ? 'text-[--secondary]'
                  : 'text-[--accent] hover:text-[--secondary]'
              }`}
            >
              {nav.label}
              {location.pathname === nav.link ? (
                <IoIosArrowRoundDown size={20} />
              ) : null}
            </Link>
          ))}
        </div>
        <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? (
            <FiMoon className="text-xl text-[--secondary]" />
          ) : (
            <FiSun className="text-xl text-[#FFFF00]" />
          )}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-center gap-4 font-semibold sm:hidden">
        {navItems.map((nav, idx) => (
          <Link
            key={idx}
            to={nav.link}
            className={`flex items-center ${
              location.pathname === nav.link
                ? 'text-[--secondary]'
                : 'text-[--accent] hover:text-[--secondary]'
            }`}
          >
            {nav.label}
            {location.pathname === nav.link ? (
              <div className="hidden sm:block">
                <IoIosArrowRoundDown size={20} />
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
};
