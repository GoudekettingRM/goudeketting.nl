'use client';
import Link from 'next/link';

const SkipToContentLink = () => {
  return (
    <Link
      href='#portfolio'
      onClick={() => {
        const el = document.getElementById('portfolio');

        if (!el) return;

        el.tabIndex = -1;
        el.focus();
        el.removeAttribute('tabindex');

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
