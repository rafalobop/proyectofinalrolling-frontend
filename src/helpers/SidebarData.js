import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faHome,
  faSignOutAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export const SidebarData = () => [
  {
    title: 'Home',
    icon: <FontAwesomeIcon icon={faHome} />,
    link: '/home',
  },
  {
    title: 'Alumnos',
    icon: <FontAwesomeIcon icon={faUsers} />,
    link: '/alumnos',
  },
  {
    title: 'Materias',
    icon: <FontAwesomeIcon icon={faBook} />,
    link: '/materias',
  },
  {
    title: 'Cerrar Sesión',
    icon: <FontAwesomeIcon icon={faSignOutAlt} />,
    link: '/',
  },
];
