import { motion } from 'framer-motion';
import Image from 'next/image';

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
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      className='flex flex-col border m-3'
    >
      <div className='group w-full h-80 relative overflow-hidden'>
        <Image
          className={`
            transition-all ease-in-out duration-200 brightness-50 hover-hover:group-hover:brightness-[0.1]
            object-cover w-full top-0 absolute z-0 h-full`}
          src={thumbnail.src}
          alt={thumbnail.alt}
          height={350}
          width={350}
        />
        <div className='transition-all ease-in-out duration-200 hover-hover group-hover:cursor-pointer group-hover:opacity-100 h-full w-full text-center flex flex-col items-center justify-center px-3 z-10 relative'>
          <h2 className='font-bold text-3xl text-shadow-outline-sm shadow-black'>{title}</h2>
          <h3 className='italic font-bold text-blue-300 text-shadow-outline-sm shadow-black text-xl'>
            {shortDesc}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
