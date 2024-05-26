'use client';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <div className='sm:col-span-2 text-center'>
      <button
        id='button'
        type='submit'
        disabled={pending}
        className='bg-indigo-600 shadow-xl hover:bg-indigo-500 text-white font-bold rounded-full p-4 w-48 disabled:cursor-not-allowed disabled:opacity-75'
      >
        {pending ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
};

export default SubmitButton;
