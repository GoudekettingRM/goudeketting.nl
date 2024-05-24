'use client';
import { useMemo } from 'react';
import projectJson from '../data/projects.json';
import { IProject, ProjectCard } from './ProjectCard';
import Section from './Section';

const Portfolio = () => {
  const projects = useMemo(() => JSON.parse(JSON.stringify(projectJson)) as IProject[], []);

  return (
    <Section id='portfolio' name='Portfolio'>
      <div>
        <h3 className='text-center text-sm text-stone-300 pb-5 italic'>Click to learn more</h3>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-4 sm:gap-2 my-6'>
          {projects.map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
