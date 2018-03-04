import React, {Component} from 'react';
import './Modal.css';

const Modal = props => {

    return (
        <div>
          <div className="overlay" onClick={() => props.onClose()}></div>
          <div className="modal-content">
            <span className="modal-close glyphicon glyphicon-remove-sign" onClick={() => props.onClose()} />
            <div className="modal-header">{props.title}</div>
            <div className="modal-body">
              {props.children}
            </div>
          </div>
        </div>
    );
};

export default Modal;
