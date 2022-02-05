import { ButtonHTMLAttributes } from 'react';

import './Button.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  buttonType: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
}

export const Button = ({
  buttonText,
  className,
  buttonType,
  onClick,
}: IButtonProps) => {
  const style = `general-button ${className}`;
  return (
    <button className={style} onClick={onClick} type={buttonType}>
      {buttonText}
    </button>
  );
};
