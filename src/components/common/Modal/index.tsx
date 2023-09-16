import { ReactNode } from 'react';

/**
 *
 * The modal component
 *
 * @param children - the popup component
 *
 * @return the modal component
 *
 */
const Modal = ({ children }: { children: ReactNode }) => (
  <div
    className="modal-container"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true">
    <div className="modal-box"></div>
    {children}
  </div>
);

Modal.defaultProps = {
  children: ''
};

export default Modal;
