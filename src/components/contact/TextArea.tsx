'use client';
import { HTMLInputAutoCompleteAttribute, useEffect, useRef, useState } from 'react';

interface ITextAreaProps {
  name: string;
  rows?: number;
  label: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  className?: string;
  placeholder?: string;
  reset: boolean;
}

const TextArea = ({
  name,
  rows = 5,
  label,
  autoComplete,
  className,
  placeholder,
  reset
}: ITextAreaProps) => {
  const [value, setValue] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!textareaRef.current) {
      return;
    }

    const textarea = textareaRef.current;
    textarea.onfocus = () => {
      textarea.placeholder = placeholder ?? '';
    };
    textarea.onblur = () => {
      textarea.removeAttribute('placeholder');
    };
    textarea.onreset = () => {
      setValue('');
    };
  }, [textareaRef, placeholder]);

  useEffect(() => {
    if (reset) {
      setValue('');
    }
  }, [reset]);

  return (
    <div className={`relative w-full ${className}`}>
      <textarea
        name={name}
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete={autoComplete ?? 'off'}
        required
        rows={rows}
        className='peer w-full text-lg py-3 px-2 text-white border-2 border-gray-500 rounded bg-gray-600 focus:placeholder-gray-400 placeholder-transparent'
      />
      <label
        htmlFor={name}
        onClick={() => {
          if (textareaRef.current) {
            textareaRef.current.focus();
          }
        }}
        className={`absolute left-2 top-5 transform -translate-y-1/2 text-base text-gray-200 italic flex items-center justify-center cursor-text transition-all duration-200 ease peer-focus:top-[-0.3rem] peer-focus:px-1 peer-focus:text-sm peer-focus:text-white peer-focus:bg-gray-600 peer-focus:italic peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:italic ${!!value ? 'top-[-0.3rem] px-1 text-sm text-white bg-gray-600 italic' : ''}`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
