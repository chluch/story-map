import React from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from '../type/types';

const Modal = ({ show, hide }: ModalProps) => {
  return (
    show
      ? createPortal(
        <>
          <div className="modal-backdrop">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <p>Modal</p>
              </div>
            </div>
          </div>
        </>, document.body
      )
      : null
  );
}

export default Modal;
