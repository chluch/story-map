import { createPortal } from 'react-dom';
import { ModalProps } from '../type/types';

const Modal = ({ show, hide }: ModalProps) => {

  return (
    show
      ? createPortal(
        <div className="modal-wrapper">
          <div className="modal-main">
            <div className="modal">
              <div className="modal-header">
                <h1>Title</h1>
                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal</p>
              </div>
            </div>
          </div>
          <div className="modal-backdrop">
          </div>
        </div>, document.body
      )
      : null
  );
}

export default Modal;
