import { HTMLAttributes } from 'react';

// Styles
import './message.css';

interface MessageProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: string;
  type?: 'error' | 'success';
}

const Message = ({ children, type }: MessageProps) => (
  <p className={`message message-${type}`}>{children}</p>
);

Message.defaultProps = {
  children: '',
  type: 'error'
};

export default Message;
