'use client';
import { sendEmail } from '@/actions/sendEmail';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';
import Section from './Section';
import SubmitButton from './contact/SubmitButton';

const Contact = () => {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false
  });

  useEffect(() => {
    if (sendEmailState.success) {
      toast.success('Email sent! You should have a confirmation email in your inbox.');
      const form = document.getElementById('contact_form') as HTMLFormElement | null;

      if (form) {
        form.reset();
      }
    }
    if (sendEmailState.error) {
      toast.error('Error sending email! Reload the page and try again.');
    }
  }, [sendEmailState]);

  return (
    <Section id='contact' name='Contact Me' className='bg-gray-900 sm:h-[calc(100dvh-86px)]'>
      <form
        id='contact_form'
        action={sendEmailAction}
        className='max-w-lg p-3 sm:p-6 bg-white rounded-md shadow-md text-base sm:min-w-96 -mx-4 sm:mx-auto min-w-full'
      >
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
            Name
          </label>
          <input
            className='w-full py-1 px-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500'
            type='text'
            id='name'
            name='name'
            autoComplete='name'
            placeholder='John Doe'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
            className='w-full py-1 px-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500'
            type='email'
            id='email'
            name='email'
            autoComplete='email'
            placeholder='john.doe@email.com'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='phone' className='block text-gray-700 font-bold mb-2'>
            Phone Number
          </label>
          <input
            className='w-full py-1 px-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500'
            type='tel'
            id='phone'
            name='phone'
            autoComplete='tel'
            placeholder='+31 6 12 34 56 78'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            className='min-w-full py-1 px-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500'
            rows={5}
            placeholder='Hi there! I would like to get in touch with you.'
          ></textarea>
        </div>
        <input type='hidden' id='honeypot' name='honeypot' />
        <SubmitButton />
      </form>
    </Section>
  );
};

export default Contact;
