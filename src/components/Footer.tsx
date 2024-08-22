import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full flex justify-between flex-col sm:items-center sm:flex-row font-mono py-8 px-6 text-sm'>
      <p>© Robin Goudeketting - {new Date().getFullYear()} • All rights reserved</p>
      <div className='grid grid-cols-2 gap-2 sm:flex sm:flex-row flex-wrap mt-4 sm:mt-0'>
        <Link
          className='sm:ml-6 underline sm:no-underline hover:underline'
          href='https://github.com/goudekettingrm'
          rel='noopener noreferrer'
          target='_blank'
        >
          &gt; Github
        </Link>
        <Link
          className='sm:ml-6 underline sm:no-underline hover:underline'
          href='https://twitter.com/RMGoudeketting'
          rel='noopener noreferrer'
          target='_blank'
        >
          &gt; X (Twitter)
        </Link>
        <Link
          className='sm:ml-6 underline sm:no-underline hover:underline'
          href='https://www.linkedin.com/in/robinmgoudeketting/'
          rel='noopener noreferrer'
          target='_blank'
        >
          &gt; LinkedIn
        </Link>
        <Link
          className='sm:ml-6 underline sm:no-underline hover:underline'
          href='mailto:r.goudeketting@gmail.com'
        >
          &gt; Email
        </Link>
        <Link className='sm:ml-6 underline sm:no-underline hover:underline' href='/impressum'>
          &gt; impressum
        </Link>
      </div>
      {/* <Link
        href='/impressum'
        className='text-gray-200 underline sm:no-underline hover:underline mt-6 ml-auto text-sm'
      >
        impressum
      </Link> */}
    </footer>
  );
}
