import { useField } from 'formik';
import { InputHTMLAttributes } from 'react';

import './Input.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelText: string;
  placeholdetText: string;
  className?: string;
}

export function Input({
  name,
  labelText,
  placeholdetText,
  className,
  type,
}: IInputProps) {
  const [field] = useField<string>(name);
  const { value, onChange } = field;

  return (
    <div className={className}>
      <label htmlFor={name} className='general-label'>
        {labelText}
      </label>
      <input
        className='general-input'
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholdetText}
        onChange={onChange}
      ></input>
    </div>
  );
}
