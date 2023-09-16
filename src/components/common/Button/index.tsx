import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

// Styles
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ variant = '', children = '', onClick }: ButtonProps) => {
  let buttonClassName = '';

  switch (variant) {
  case 'primary':
    buttonClassName = 'button-primary';
    break;
  case 'secondary':
    buttonClassName = 'button-secondary';
    break;
  default:
    buttonClassName = 'button-tertiary';
  }

  return (
    <button className={`button ${buttonClassName}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
