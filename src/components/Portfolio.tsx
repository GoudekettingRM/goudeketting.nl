'use client';
import { useMemo } from 'react';
import projectJson from '../data/projects.json';
import { IProject, ProjectCard } from './ProjectCard';
import Section from './Section';

const Portfolio = () => {
  const projects = useMemo(() => JSON.parse(JSON.stringify(projectJson)) as IProject[], []);

  return (
    <Section id='portfolio' name='Portfolio'>
      <div className='max-w-[1270px]'>
        <h3 className='text-center text-sm text-stone-300 pb-5 italic'>Click to learn more</h3>
        <div
          className='grid md:gap-6 gap-4 my-6'
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,300px),1fr))' }}
        >
          {projects.map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
