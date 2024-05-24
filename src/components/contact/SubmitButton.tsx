'use client';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <div className='text-right'>
      <button
        type='submit'
        disabled={pending}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:bg-blue-700 ${pending ? 'cursor-not-allowed opacity-75' : ''}`}
      >
        {pending ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
};

export default SubmitButton;
