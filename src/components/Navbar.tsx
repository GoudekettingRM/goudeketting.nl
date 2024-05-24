'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { MenuButton } from './navbar/MenuButton';

const links = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Portfolio',
    href: '#portfolio'
  },
  {
    name: 'Contact',
    href: '#contact'
  }
];

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const menuVariants = {
    open: { opacity: 1, y: '0%', marginX: '10px', display: 'flex' },
    closed: { opacity: 0, y: '10%', marginX: '10px', display: 'none' }
  };

  return (
    <div
      className='fixed top-5 right-5 flex sm:flex-row z-50'
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          setOpen(!isOpen);
        }
      }}
    >
      <motion.ul
        initial={{ opacity: 0 }}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className='bg-white absolute right-0 top-[calc(100%+0.5rem)] sm:relative sm:bg-transparent flex sm:flex-row flex-col py-2 rounded-md shadow-md sm:py-0 sm:shadow-none sm:rounded-none text-left opaci'
      >
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className='transition-all cursor-pointer ease-out duration-100 bold text-lg text-black sm:text-white hover:text-blue-300 border-b border-gray-400 w-full px-2 sm:px-0 sm:border-none pb-2 mb-2 sm:pb-0 sm:mb-0 last:border-none last:pb-0 last:mb-0'
              onClick={() => {
                setOpen(false);
                setTimeout(() => {
                  window.history.pushState({}, '', '/');
                }, 0);
              }}
            >
              <li className='mx-2'>{link.name}</li>
            </Link>
          );
        })}
      </motion.ul>
      <MenuButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
    </div>
  );
}
