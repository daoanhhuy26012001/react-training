import { HTMLAttributes } from 'react';

// Styles
import './message.css';

interface MessageProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: string;
  action?: 'error' | 'successful';
}

const Message = ({ children, action }: MessageProps) => (
  <p className={`message message-${action}`}>{children}</p>
);

Message.defaultProps = {
  children: '',
  action: 'error'
};

export default Message;
