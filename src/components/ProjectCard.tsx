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
      transition-all ease-in-out duration-200 brightness-50 hover-hover:group-hover:brightness-[0.1]
      object-cover w-full top-0 absolute z-0 h-full`}
        />
      );
    }

    return (
      <Image
        className={`
        transition-all ease-in-out duration-200 brightness-50 hover-hover:group-hover:brightness-[0.1]
        object-cover w-full top-0 absolute z-0 h-full`}
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
          whileHover={{ scale: 1.05 }}
          className='flex flex-col border m-3'
        >
          <div className='group w-full h-80 relative overflow-hidden'>
            {Img}
            <div className='transition-all ease-in-out duration-200 hover-hover group-hover:cursor-pointer group-hover:opacity-100 h-full w-full text-center flex flex-col items-center justify-center px-3 z-10 relative'>
              <h2 className='font-bold text-3xl text-shadow-outline-sm shadow-black'>{title}</h2>
              <h3 className='italic font-bold text-blue-300 text-shadow-outline-sm shadow-black text-xl'>
                {shortDesc}
              </h3>
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
                className='flex-1 underline sm:no-underline link-external px-3 py-2 rounded-md bg-gray-200 shadow-md transition-all ease-in-out duration-200 hover:bg-gray-300 hover:shadow-lg hover:transition-all hover:ease-in-out hover:duration-200 text-center'
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
