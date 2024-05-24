import { ReactNode } from 'react';

function Section({
  name,
  children,
  id,
  className = ''
}: {
  id: string;
  name: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`pt-2 pb-8 xl:pt-8 xl:pb-16 text-white text-2xl w-full text-center border-b-2 focus:outline-none ${className}`}
      id={id}
      tabIndex={-1}
    >
      <div className='w-5/6 md:w-3/4 flex-col flex items-center justify-center mx-auto'>
        <h2 id={name} className='text-4xl py-5 font-bold'>
          {name}
        </h2>
        <div className='py-2 w-full flex justify-center items-center'>{children}</div>
      </div>
    </div>
  );
}

export default Section;
