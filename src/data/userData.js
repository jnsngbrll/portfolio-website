import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import projectImage from '../assets/project.png';
import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import javascriptLogo from '../assets/javascript-logo.png';
import tailwindLogo from '../assets/tailwind-css-logo.png';
import reactLogo from '../assets/react-logo.png';
import expressLogo from '../assets/express-logo.png';
import nodeLogo from '../assets/nodejs-logo.jpg';
import mongodbLogo from '../assets/mongodb-logo.png';
import mysqlLogo from '../assets/mysql-logo.png';

export const userData = {
  name: 'Jansen Gabrillo',
  designation: 'Student',
  email: 'gabrillojansen@gmail.com',
  phone: '+63 9669151754',
  address: 'Tarlac, Philippines',
  tools: [
    { title: 'Html', logo: htmlLogo },
    { title: 'Css', logo: cssLogo },
    { title: 'JavaScript', logo: javascriptLogo },
    { title: 'Tailwind', logo: tailwindLogo },
    { title: 'React', logo: reactLogo },
    { title: 'Node', logo: nodeLogo },
    { title: 'Express', logo: expressLogo },
    { title: 'mongoDB', logo: mongodbLogo },
    { title: 'MySQL', logo: mysqlLogo },
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
