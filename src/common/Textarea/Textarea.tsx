import { useField } from 'formik';
import { ChangeEvent } from 'react';

interface ITextareaProps {
  name: string;
  labelText: string;
  placeholdetText: string;
  className?: string;
}

export function Textarea({
  name,
  labelText,
  placeholdetText,
  className,
}: ITextareaProps) {
  const [field, meta] = useField<string>(name);
  const { value, onChange } = field;

  return (
    <div className={className}>
      <label htmlFor={name}>{labelText}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholdetText}
        onChange={onChange}
      ></textarea>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
}
