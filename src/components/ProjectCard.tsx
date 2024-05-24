'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import BasecampLogo from '../../public/career-basecamp.svg';
import GenericInfoModal from './modal/GenericInfoModal';

export interface IProject {
  title: string;
  shortDesc: string;
  longDesc: string;
  thumbnail: { src: string; alt: string };
  links: { title: string; link: string }[];
  skills: string[];
  newTab?: boolean;
}

export function ProjectCard({ links, longDesc, shortDesc, skills, thumbnail, title }: IProject) {
  const SVGs = useMemo(
    () => ({
      basecamp: BasecampLogo
    }),
    []
  );

  const Img = useMemo(() => {
    if (thumbnail.src.startsWith('svg:')) {
      const svg = thumbnail.src.replace('svg:', '');
      const SVG = SVGs[svg as keyof typeof SVGs];
      return (
        <SVG
          className={`
      transition-all ease-in-out duration-200 brightness-75 group-hover:brightness-50
      object-cover w-full top-0 absolute z-0 h-full rounded-lg`}
        />
      );
    }

    return (
      <Image
        className={`
        transition-all ease-in-out duration-200 brightness-75 group-hover:brightness-50
        object-cover w-full top-0 absolute z-0 h-full rounded-lg`}
        src={thumbnail.src}
        alt={thumbnail.alt}
        height={350}
        width={350}
      />
    );
  }, [thumbnail, SVGs]);

  return (
    <GenericInfoModal
      title={title}
      Button={
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover='hover'
          variants={{
            hover: {
              scale: 1.05
            }
          }}
          className='flex flex-col border-2 rounded-lg m-3 min-w-44'
        >
          <div className='group w-full h-80 relative rounded-lg overflow-hidden flex'>
            {Img}
            <div className='h-full w-full text-center flex flex-col justify-start items-center px-3 z-10 relative'>
              <motion.h2
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                initial={{ y: 0 }}
                variants={{
                  hover: {
                    y: '-260px'
                  }
                }}
                className='font-bold text-3xl text-shadow-outline-sm shadow-black mb-3 bottom-0 absolute'
              >
                {title}
              </motion.h2>
              <motion.h3
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                initial={{ top: '100%' }}
                variants={{
                  hover: {
                    translateY: 'calc(-100% - 1rem)'
                  }
                }}
                className='italic font-bold text-blue-300 text-shadow-outline-sm shadow-black text-xl max-h-fit relative'
              >
                {shortDesc}
              </motion.h3>
            </div>
          </div>
        </motion.div>
      }
    >
      <>
        <p className='flex justify-center items-center text-black'>{longDesc}</p>
        <div className='mt-8 sm:mt-6 flex flex-row flex-wrap gap-2'>
          {skills.map((skill) => {
            return (
              <span
                key={skill}
                className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'
              >
                {skill}
              </span>
            );
          })}
        </div>
        <div className='flex flex-row flex-wrap justify-around items-center text-black w-full mt-8 gap-4'>
          {links.map((link, i) => {
            return (
              <Link
                key={link.link}
                href={link.link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 underline sm:no-underline link-external px-3 py-2 rounded-lg bg-gray-200 shadow-md transition-all ease-in-out duration-200 hover:bg-gray-300 hover:shadow-lg hover:transition-all hover:ease-in-out hover:duration-200 text-center'
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </>
    </GenericInfoModal>
  );
}
