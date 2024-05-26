'use client';
import { HTMLInputAutoCompleteAttribute, useEffect, useRef, useState } from 'react';

interface IInputProps {
  name: string;
  type?: 'text' | 'email' | 'tel';
  label: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  className?: string;
  placeholder?: string;
  reset: boolean;
}

const Input = ({
  name,
  type = 'text',
  label,
  autoComplete,
  className,
  placeholder,
  reset
}: IInputProps) => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current || !placeholder) {
      return;
    }

    const input = inputRef.current;
    input.onfocus = () => {
      input.placeholder = placeholder ?? '';
    };
    input.onblur = () => {
      input.removeAttribute('placeholder');
    };
  }, [inputRef, placeholder]);

  useEffect(() => {
    if (reset) {
      setValue('');
    }
  }, [reset]);

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type={type}
        name={name}
        ref={inputRef}
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete={autoComplete ?? 'off'}
        placeholder={placeholder}
        required
        className='peer w-full text-lg py-3 px-2 text-white border-2 border-gray-500 rounded bg-gray-600 focus:placeholder-gray-400 placeholder-transparent'
      />
      <label
        htmlFor={name}
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 text-base text-gray-200 italic flex items-center justify-center cursor-text transition-all duration-200 ease peer-focus:top-[-0.3rem] peer-focus:px-1 peer-focus:text-sm peer-focus:text-white peer-focus:bg-gray-600 peer-focus:italic peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:italic ${!!value ? 'top-[-0.3rem] px-1 text-sm text-white bg-gray-600 italic' : ''}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
