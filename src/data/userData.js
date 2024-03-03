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
  personal: [
    { name: 'Name', label: 'Jansen Gabrillo' },
    { name: 'Designation', label: 'Student' },
    { name: 'Address', label: 'Tarlac, Philippines' },
  ],
  tools: [
    { name: 'Html', logo: <FaHtml5 color="#e34c26" /> },
    { name: 'Css', logo: <FaCss3Alt color="#264de4" /> },
    { name: 'JavaScript', logo: <IoLogoJavascript color="#f0db4f" /> },
    { name: 'Tailwind', logo: <SiTailwindcss color="#3490dc" /> },
    { name: 'Bootstrap', logo: <FaBootstrap color="#563d7c" /> },
    { name: 'React', logo: <FaReact color="#7cc5d9" /> },
    { name: 'Node', logo: <FaNodeJs color="#3c873a" /> },
    { name: 'Express', logo: <SiExpress /> },
    { name: 'mongoDB', logo: <SiMongodb color="4db33d" /> },
    { name: 'PHP', logo: <FaPhp color="#8993be" /> },
    { name: 'MySQL', logo: <SiMysql color="#00758f" /> },
  ],
  projects: [
    {
      name: 'Shoewares',
      description: '',
      image: projectImage,
      link: 'https://shoewares.netlify.app/',
    },
    {
      name: 'Toolwares',
      description: '',
      image: projectImage,
      link: 'https://toolwares.netlify.app/',
    },
    {
      name: 'Gsources',
      description: '',
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
