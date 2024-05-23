import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full flex justify-between flex-col items-center sm:flex-row font-mono py-8 px-4 text-sm'>
      <p>© Robin Goudeketting - {new Date().getFullYear()}</p>
      <div className='flex flex-row flex-wrap mt-4 sm:mt-0'>
        <Link
          className='sm:ml-6 underline sm:no-underline hover:underline'
          href='https://github.com/goudekettingrm'
          rel='noopener noreferrer'
          target='_blank'
        >
          &gt; Github
        </Link>
        <Link
          className='ml-6 underline sm:no-underline hover:underline'
          href='https://twitter.com/RMGoudeketting'
          rel='noopener noreferrer'
          target='_blank'
        >
          &gt; X (Twitter)
        </Link>
        <Link
          className='ml-6 underline sm:no-underline hover:underline'
          href='https://www.linkedin.com/in/robinmgoudeketting/'
          rel='noopener noreferrer'
          target='_blank'
        >
          &gt; LinkedIn
        </Link>
        <Link
          className='ml-6 underline sm:no-underline hover:underline'
          href='mailto:robin@goudeketting.nl'
        >
          &gt; robin@goudeketting.nl
        </Link>
      </div>
    </footer>
  );
}
