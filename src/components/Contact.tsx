'use client';
import { sendEmail } from '@/actions/sendEmail';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';
import Section from './Section';
import Input from './contact/Input';
import SubmitButton from './contact/SubmitButton';
import TextArea from './contact/TextArea';

const Contact = () => {
  const [reset, setReset] = useState(false);
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false
  });

  useEffect(() => {
    if (sendEmailState.success) {
      toast.success('Email sent! You should have a confirmation email in your inbox.');

      setReset(true);
      setTimeout(() => {
        setReset(false);
      }, 0);
    }
    if (sendEmailState.error) {
      toast.error('Error sending email! Reload the page and try again.');
    }
  }, [sendEmailState]);

  return (
    <Section
      id='contact'
      name='Contact Me'
      className='bg-gray-900 sm:h-[calc(100dvh-86px)]'
      childWrapperClassName='!block'
    >
      <form
        id='contact_form'
        action={sendEmailAction}
        className='sm:max-w-lg min-w-full sm:min-w-fit sm:mx-auto text-base grid grid-cols-1 sm:grid-cols-2 gap-6'
      >
        <Input
          name='name'
          label='Name'
          autoComplete='name'
          className='sm:col-span-2'
          placeholder='John Doe'
          reset={reset}
        />
        <Input
          name='email'
          label='E Mail'
          type='email'
          autoComplete='email'
          className='col-span-1'
          placeholder='john.doe@email.com'
          reset={reset}
        />
        <Input
          name='phone'
          label='Phone Number'
          autoComplete='tel'
          type='tel'
          className='col-span-1'
          placeholder='+31 6 12 34 56 78'
          reset={reset}
        />

        <TextArea
          name='message'
          label='Message'
          className='sm:col-span-2'
          placeholder='Hi there! I would like to get in touch with you.'
          reset={reset}
        />

        <input type='hidden' id='honeypot' name='honeypot' className='h-0' />
        <SubmitButton />
      </form>
    </Section>
  );
};

export default Contact;
