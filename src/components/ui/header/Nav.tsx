import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavProps {
  containerStyles?: string;  
  linkStyles?: string;
  underLineStyles?: string;
}

const links = [
  { path: '/', name: 'Home' },
  { path: '/projects', name: 'Mis Proyectos' },
  { path: '/contact', name: 'Contacto' }
];

const Nav: React.FC<NavProps> = ({ containerStyles = '', linkStyles = '', underLineStyles = '' }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
              {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underLineStyles}`} 
              />
            )}
            {link.name}
        
         
        </Link>
      ))}
    </nav>
  );
};

export default Nav;