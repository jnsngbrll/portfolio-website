import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaBootstrap,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';

import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';

import projectImage from '../assets/project.png';

export const userData = {
  name: 'Jansen Gabrillo',
  designation: 'Student',
  email: 'gabrillojansen@gmail.com',
  phone: '+63 9669151754',
  address: 'Tarlac, Philippines',
  tools: [
    { title: 'Html', logo: <FaHtml5 /> },
    { title: 'Css', logo: <FaCss3Alt /> },
    { title: 'JavaScript', logo: <IoLogoJavascript /> },
    { title: 'Tailwind', logo: <SiTailwindcss /> },
    { title: 'Bootstrap', logo: <FaBootstrap /> },
    { title: 'React', logo: <FaReact /> },
    { title: 'Node', logo: <FaNodeJs /> },
    { title: 'Express', logo: <SiExpress /> },
    { title: 'mongoDB', logo: <SiMongodb /> },
    { title: 'PHP', logo: <FaPhp /> },
    { title: 'MySQL', logo: <SiMysql /> },
  ],
  projects: [
    {
      title: 'Gsources',
      description:
        'Enhance your web design skills for free with Gsources. Explore our curated collection of templates assets and expert insights. Unlock your creativity and design without limits!',
      image: projectImage,
      link: 'https://gsources.netlify.app/',
    },
    {
      title: 'Gsources',
      description:
        'Enhance your web design skills for free with Gsources. Explore our curated collection of templates assets and expert insights. Unlock your creativity and design without limits!',
      image: projectImage,
      link: 'https://gsources.netlify.app/',
    },
    {
      title: 'Gsources',
      description:
        'Enhance your web design skills for free with Gsources. Explore our curated collection of templates assets and expert insights. Unlock your creativity and design without limits!',
      image: projectImage,
      link: 'https://gsources.netlify.app/',
    },
  ],
  socials: [
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/jnsngbrll',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/jnsngbrll/',
    },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/jnsngbrll' },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/jnsngbrll/',
    },
    {
      name: 'TikTok',
      icon: <FaTiktok />,
      url: 'https://www.tiktok.com/@jnsngbrll?lang=en',
    },
  ],
};
