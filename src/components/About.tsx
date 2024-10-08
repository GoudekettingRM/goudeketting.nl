import Image from 'next/image';
import RobinImage from '../../public/robin-goudeketting.jpg';
import Section from './Section';

export default function About() {
  return (
    <Section id='about' name='About Me' className='bg-gray-900'>
      <div className='text-base md:text-lg lg:text-xl w-5/6 md:w-5/6 flex flex-col-reverse md:flex-row items-center justify-center gap-10'>
        <div className='text-justify sm:text-left sm:max-w-prose' tabIndex={0}>
          <p>I&apos;m Robin! I am a curious, enthusiastic, goal-oriented developer.</p>
          <br />
          <p>
            I was trained as a <strong>neuroscientist</strong>, but instead of doing a PhD and
            continuing in academia, I moved away from science into a more practical career as a
            full-stack developer.
          </p>
          <br />
          <p>
            In 2021 I moved to Vienna with my partner, where I am currently working remotely as a{' '}
            <strong>Web Developer</strong>. I am always looking for new opportunities to learn and
            grow as a developer, as well as to contribute to projects that make a difference.
          </p>
          <br />
          <p>
            My interests and hobbies are plenty, but to name a few; Software Engineering, Ultimate
            Frisbee, Hiking, and Cocktail Making.
          </p>
        </div>
        <Image
          className='w-1/2 md:w-1/3 aspect-square rounded-full border-white border-2 animate-fade-in from-top'
          alt='Robin Goudeketting'
          src={RobinImage}
        />
      </div>
    </Section>
  );
}
