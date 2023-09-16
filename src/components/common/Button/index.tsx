import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

// Styles
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ variant, children, onClick }: ButtonProps) => (
  <button className={`button button-${variant}`} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  variant: 'primary',
  children: '',
  onClick: () => {}
};

export default Button;
