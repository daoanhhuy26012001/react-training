import { ChangeEvent, InputHTMLAttributes } from 'react';

// Styles
import './input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, label, type, placeholder, onChange }: InputProps) => (
  <div className="form-control">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      className="form-enter"
      onChange={onChange}
    />
  </div>
);

Input.defaultProps = {
  id: '',
  label: '',
  type: 'text',
  onchange: () => {}
};

export default Input;
