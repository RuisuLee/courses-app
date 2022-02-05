import { useField } from 'formik';
import { ChangeEvent } from 'react';

import './Input.scss';

interface IInputProps {
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
}: IInputProps) {
  const [field] = useField<string>(name);
  const { value, onChange } = field;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ target: { value: event.target.value, name } });
  };

  return (
    <div className={className}>
      <label htmlFor={name} className='general-label'>
        {labelText}
      </label>
      <input
        className='general-input'
        type='text'
        id={name}
        name={name}
        value={value}
        placeholder={placeholdetText}
        onChange={handleChange}
      ></input>
    </div>
  );
}
