'use client';
import Link from 'next/link';

const SkipToContentLink = () => {
  return (
    <Link
      href='#portfolio'
      onClick={() => {
        document.getElementById('portfolio')!.focus();

        setTimeout(() => {
          window.history.pushState({}, '', '/');
        }, 0);
      }}
      tabIndex={0}
      className='absolute left-[-9999px] top-5 bg-blue-500 text-white px-2 py-1 focus:left-10'
    >
      Skip to Main Content
    </Link>
  );
};

export default SkipToContentLink;
