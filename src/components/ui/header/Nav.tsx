import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import SelectButton from './SelectButton';

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
  underLineStyles?: string;
}

const links = [
  { path: '/', name: 'Home' },


];

const Nav: React.FC<NavProps> = ({ containerStyles = '', linkStyles = '', underLineStyles = '' }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}` }>
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
      <SelectButton />
    </nav>
  );
};

export default Nav;