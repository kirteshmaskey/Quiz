import React from 'react'

const Modal = () => {
  return (
    <div className="modal-container isOpen">
      <div className="modal-content">
        <h2>Congrats</h2>
        <p>
          You got n questions right 
        </p>
        <button className="close-btn">Play Quiz Again</button>
      </div>
    </div>
  );
};

export default Modal;