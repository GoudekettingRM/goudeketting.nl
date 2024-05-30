'use client';
import { isReactElement } from '@/utils/isReactElement';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import {
  Children,
  ComponentPropsWithoutRef,
  Dispatch,
  ReactNode,
  SetStateAction,
  cloneElement
} from 'react';

interface IDefaultModalProps {
  title: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  closeFunction?: never;
  children: ReactNode;
}
interface ICloseFunctionModalProps {
  title: ReactNode;
  open: boolean;
  setOpen?: never;
  closeFunction: () => void;
  children: ReactNode;
}

type TModalProps = (IDefaultModalProps | ICloseFunctionModalProps) &
  Omit<ComponentPropsWithoutRef<'div'>, 'title'>;

const Modal = ({
  title,
  open,
  setOpen,
  closeFunction,
  children,
  className,
  ...props
}: TModalProps) => {
  const closeFn = closeFunction ?? (() => setOpen(false));

  return (
    <Transition show={open} className='hidden'>
      <Dialog open={open} onClose={closeFn} className='fixed inset-0 z-50'>
        <div className='min-w-screen sm:flex min-h-screen sm:items-center sm:justify-center'>
          <Transition.Child
            enter='ease-out duration-200'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 min-h-screen bg-gray-800 opacity-50' />
          </Transition.Child>

          <Transition.Child
            enter='transition ease-out duration-200'
            enterFrom='-translate-x-full sm:translate-x-0 sm:translate-y-1'
            enterTo='translate-x-0 sm:translate-y-0'
            leave='transition ease-in duration-200'
            leaveFrom='translate-x-0 sm:translate-y-0'
            leaveTo='-translate-x-full sm:translate-x-0 sm:translate-y-1'
          >
            <div
              className={`
                  relative flex max-h-[calc(100vh-5rem-1px)] w-full sm:w-[calc(100vw-3rem)] min-w-[200px]
                  sm:max-w-md lg:max-w-xl flex-col overflow-hidden bg-white text-sm
                  leading-relaxed shadow-xl sm:max-h-[calc(100vh-10rem)] sm:rounded-lg
                  ${className || ''}
                `}
              {...props}
            >
              <div
                className='
                    flex h-12 w-full shrink-0 items-center border-b border-gray-300
                    bg-white px-4 font-semibold text-slate-800
                  '
              >
                <Dialog.Title className='text-base'>{title}</Dialog.Title>

                <button
                  type='button'
                  className='
                      group -mr-2 ml-auto grid h-8 w-8 place-content-center
                      rounded-full transition-colors hover:cursor-pointer hover:bg-gray-100
                    '
                  onClick={closeFn}
                >
                  <XIcon className='w-5 h-5' />
                </button>
              </div>

              <div className='flex flex-1 flex-col overflow-y-auto pb-10 p-6 text-default'>
                {Children.map(children, (child) => {
                  if (isReactElement(child)) {
                    return cloneElement(child, {
                      closemodal: () => {
                        setOpen && setOpen(false);
                      }
                    });
                  }
                  return child;
                })}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
