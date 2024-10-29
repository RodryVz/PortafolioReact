import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';
import Work7 from './assets/project-7.png';
import Work8 from './assets/project-8.png';


import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'HOME',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'ABOUT',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'PORTFOLIO',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'CONTACT',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Rodrigo',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Valenzuela',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '31 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Argentina',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Chaco',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+54-3624-968347',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'Rodry_valenzuela@hotmail.com',
  },

  {
    id: 9,
    title: 'Linkedin : ',
    description: 'rodrigo-valenzuela',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Spanish, Basic English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '7+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '7+',
    title: 'Technologies <br /> worked',
  },

  {
    id: 4,
    no: '2+',
    title: ' Completed <br /> courses',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'UI/UX Designer <span> Themeforest </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: 'Consultant <span> Videohive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Engineering Degree <span> Oxford University </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012',
    title: 'Master Degree <span> KIEV University </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009',
    title: 'Bachelor Degree <span> Tunis High School </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '75',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '60',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'TypeScript',
    percentage: '50',
  },

  {
    id: 5,
    title: 'Python',
    percentage: '50',
  },

  {
    id: 6,
    title: 'Next Js.',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Git',
    percentage: '70',
  },

  {
    id: 8,
    title: 'React',
    percentage: '80',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work7,
    title: 'Chat Bot IA',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Chat Bot con IA',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '-',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Next Js, TypeScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://mobile-ai.netlify.app" target="_blank" rel="noopener noreferrer">Chat bot "Mobile AI"</a>,
      },
    ],
  },
  {
    id: 2,
    img: Work8,
    title: 'WebSite',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WebSite',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '-',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js, TypeScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://oficlic.netlify.app" target="_blank" rel="noopener noreferrer">Web Oficlic</a>,
      },
    ],
  },
  {
    id: 3,
    img: Work1,
    title: 'WebSite',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WebSite',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '-',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js, TypeScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://inmobiliariass.netlify.app/" target="_blank" rel="noopener noreferrer">inmobiliarias web/</a>,
      },
    ],
  },
  {
    id: 4,
    img: Work2,
    title: 'WebSite',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WebSite',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '-',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js, TypeScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://rodryvz.github.io/Website_Gym/" target="_blank" rel="noopener noreferrer">Gym web</a>,
      },
    ],
  },

  {
    id: 5,
    img: Work3,
    title: 'Aplicacion Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Aplicacion',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '-',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://porfolio-rodri.netlify.app/" target="_blank" rel="noopener noreferrer">Porfolio personal</a>,
      },
    ],
  },

  {
    id: 6,
    img: Work4,
    title: 'Aplicacion Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Aplicacion Web',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '-',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python, Django',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '-',
      },
    ],
  },

  {
    id: 7,
    img: Work5,
    title: 'Aplicacion Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Aplicacion Web',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '-',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://rodryvz.github.io/Api_rickandMorty/" target="_blank" rel="noopener noreferrer">App RickandMorty/</a>,
      },
    ],
  },
  {
    id: 8,
    img: Work6,
    title: 'Aplicacion Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Aplicacion Web',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '-',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://rodryvz.github.io/CarritoCompras/" target="_blank" rel="noopener noreferrer">CarritoCompras</a>,
      },
    ],
  },

  

];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
