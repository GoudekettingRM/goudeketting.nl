import Section from './Section';

const Contact = () => {
  return (
    <Section id='contact' name='Contact Me' className='bg-gray-900 h-[calc(100dvh-86px)]'>
      <form className='max-w-xl mx-auto'>
        <div className='mb-4'>
          <label className='block mb-2'>Name</label>
          <input type='text' className='w-full p-2 border border-gray-300 rounded' />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Email</label>
          <input type='email' className='w-full p-2 border border-gray-300 rounded' />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Message</label>
          <textarea className='w-full p-2 border border-gray-300 rounded'></textarea>
        </div>
        <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded'>
          Send
        </button>
      </form>
    </Section>
  );
};

export default Contact;
