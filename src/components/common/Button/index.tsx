import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

// Styles
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  variant = 'primary',
  children = '',
  onClick = () => {}
}: ButtonProps) => {
  return (
    <button className={`button button-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
