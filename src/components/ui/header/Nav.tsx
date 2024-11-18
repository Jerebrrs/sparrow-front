import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import SelectButton from './SelectButton';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '../menubar';

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
    <nav className={`${containerStyles}`}>
      {/* {links.map((link, index) => (
        <Link href={link.path} key={index} classNameName={`capitalize ${linkStyles}`}>
          {link.path === path && (
            <motion.span
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'tween' }}
              layoutId='underline'
              classNameName={`${underLineStyles}`}
            />
          )}
          {link.name}


        </Link>

      ))} */}


      {/* <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div> */}
      <div className="hidden lg:flex lg:gap-x-12">

        <SelectButton />

        <a href="#" className="text-sm/6 font-semibold text-gray-900">Informacion</a>
        <a href="#" className="text-sm/6 font-semibold text-gray-900">Blog</a>
        {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">Company</a> */}
      </div>
      {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
      </div> */}



    </nav>
  );
};

export default Nav;