'use client';
import { useMotion } from '@/hooks/useMotion';
import Link from 'next/link';

const Header = () => {
  const { motion } = useMotion();

  return (
    <div
      id='home'
      className='h-[100dvh] w-full items-center border-b-2 flex flex-col justify-center'
    >
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className='text-center text-7xl font-bold italic text-green-300'
      >
        Hey! I&apos;m
      </motion.h2>
      <h1 className='text-center text-8xl font-bold text-white mt-4'>
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          Robin
        </motion.div>
        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <span className='hidden sm:block mt-1'>Goudeketting</span>
        </motion.div>
      </h1>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 2, 1], scale: [1, 1.05, 1] }}
        transition={{ duration: 1, times: [0.3, 0.4, 1.0] }}
        className='text-center text-xl hover:cursor-pointer hover:text-stone-100 text-stone-300 pt-5 italic'
      >
        <Link
          href='#contact'
          className='flex flex-col justify-center items-center'
          onClick={() => {
            const el = document.getElementById('contact');

            if (!el) return;

            el.tabIndex = -1;
            el.focus();
            el.removeAttribute('tabindex');

            setTimeout(() => {
              window.history.pushState({}, '', '/');
            }, 0);
          }}
        >
          Want to chat?
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='animate-bounce sticky mt-10 bottom-0 h-10 w-10 text-white z-50'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </Link>
      </motion.h3>
    </div>
  );
};

export default Header;
