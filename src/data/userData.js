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
    { title: 'Html', logo: <FaHtml5 color="#e34c26" /> },
    { title: 'Css', logo: <FaCss3Alt color="#264de4" /> },
    { title: 'JavaScript', logo: <IoLogoJavascript color="#f0db4f" /> },
    { title: 'Tailwind', logo: <SiTailwindcss color="#3490dc" /> },
    { title: 'Bootstrap', logo: <FaBootstrap color="#563d7c" /> },
    { title: 'React', logo: <FaReact color="#7cc5d9" /> },
    { title: 'Node', logo: <FaNodeJs color="#3c873a" /> },
    { title: 'Express', logo: <SiExpress /> },
    { title: 'mongoDB', logo: <SiMongodb color="4db33d" /> },
    { title: 'PHP', logo: <FaPhp color="#8993be" /> },
    { title: 'MySQL', logo: <SiMysql color="#00758f" /> },
  ],
  projects: [
    {
      title: 'Shoewares',
      description: '',
      image: projectImage,
      link: 'https://shoewares.netlify.app/',
    },
    {
      title: 'Toolwares',
      description: '',
      image: projectImage,
      link: 'https://toolwares.netlify.app/',
    },
    {
      title: 'Gsources',
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
