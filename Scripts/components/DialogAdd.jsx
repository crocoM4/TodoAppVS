import React from 'react';
import PropTypes from 'prop-types';

const DialogAdd = ({
  isOpen, contentToRender, onClose, onBack,
}) => {
  let cssValue = {
    height: '0px',
    opacity: '0',
    visibility: 'hidden',
  };

  if (isOpen) {
    cssValue = {
      display: 'block',
      height: '100vh',
      opacity: '1',
      visibility: 'visible',
    };
  }

  return (
    <div id="backdrop-dialog" style={cssValue}>
      <div id="dialog-add" >
        <div className="dialog-header">
          <button id="main-close-button" onClick={() => onClose()}>
            <i className="material-icons">&#xE5CD;</i>
          </button>
        </div>

        <div className="dialog-container">
          {contentToRender}
        </div>

        <div className="dialog-footer">
          <button
            id="back-button-dialog"
            className="text-button"
            onClick={() => onBack(this.props.counterProcessi)}
          >
            NEVER MIND, GO BACK
          </button>
        </div>
      </div>
    </div>
  );
};

DialogAdd.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  contentToRender: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default DialogAdd;
