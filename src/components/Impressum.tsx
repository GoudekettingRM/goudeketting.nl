import Link from 'next/link';

const Impressum = () => {
  return (
    <>
      <h2 className='text-2xl font-bold mb-6'>Impressum</h2>
      <div className='max-w-screen-md'>
        <p className='italic text-gray-200 mb-4'>
          This website is created, owned and operated by{' '}
          <em>
            Lord <sup>*</sup> Robin M. Goudeketting, MSc
          </em>
          .
        </p>
        <p className='italic text-gray-200 mb-4'>Kleinunternehmer gem. § 6 Abs. 1 Z 27 UstG</p>
        <p className='italic text-gray-200 mb-12'>
          Disclaimer: Opinions are my own. All text on the website has been carefully checked.
          Nevertheless, no guarantee can be given for the correctness, completeness and timeliness
          of the information.
        </p>
        <div className='flex flex-wrap justify-start gap-x-16 items-center text-left'>
          <div>
            <h3 className='text-lg font-bold mb-3'>Address</h3>
            <p className='italic text-gray-200 mb-8'>Vienna, Austria</p>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-3'>Contact</h3>
            <p className='italic text-gray-200 mb-8'>
              Email:{' '}
              <Link
                className='underline sm:no-underline link-external white'
                href='mailto:r.goudeketting@gmail.com'
              >
                r.goudeketting@gmail.com
              </Link>
            </p>
          </div>
        </div>
        <p className='italic text-gray-200 text-sm'>
          * Yes, some friends actually gave me a Lord title and I use it <s>proudly</s> ironically.
        </p>
      </div>
    </>
  );
};

export default Impressum;
