'use client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toaster = () => {
  return (
    <>
      <ToastContainer position='top-center' autoClose={2000} />
    </>
  );
};

export default Toaster;
