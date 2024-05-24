'use client';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { ComponentPropsWithoutRef, ElementType, ReactNode, useState } from 'react';
import Modal from './Modal';

interface ISimpleInfoModalProps {
  title: ReactNode;
  buttonText: string;
  buttonClassName?: string;
  children: ReactNode;
  Button?: never;
  buttonComponent?: never;
  buttonProps?: never;
}

interface IComplexInfoModalProps<T extends ElementType> {
  title: ReactNode;
  Button: ReactNode;
  children: ReactNode;
  buttonComponent?: T;
  buttonProps?: ComponentPropsWithoutRef<T>;
  buttonText?: never;
  buttonClassName?: never;
}

type TGenericInfoModalProps<T extends ElementType> = (
  | ISimpleInfoModalProps
  | IComplexInfoModalProps<T>
) &
  ComponentPropsWithoutRef<T>;

const GenericInfoModal = <T extends ElementType>({
  title,
  buttonText,
  buttonClassName = '',
  Button,
  buttonComponent,
  buttonProps,
  children,
  ...modalProps
}: TGenericInfoModalProps<T>) => {
  const [modalOpen, setModalOpen] = useState(false);
  const Component = buttonComponent || 'button';

  return (
    <>
      {!!Button ? (
        <Component
          {...buttonProps}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          {Button}
        </Component>
      ) : (
        <button
          type='button'
          className={`text-neutral-700 underline flex gap-1 items-center ${buttonClassName}`}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <InformationCircleIcon className='w-5 h-5' /> {buttonText}
        </button>
      )}

      <Modal {...modalProps} open={modalOpen} setOpen={setModalOpen} title={title}>
        {children}
      </Modal>
    </>
  );
};

export default GenericInfoModal;
