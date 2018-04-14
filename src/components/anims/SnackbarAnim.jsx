import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const duration = 250;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  bottom: '-100px',
};

const transitionStyles = {
  entering: {
    bottom: '-100px',
    visibility: 'hidden',
  },
  entered: {
    bottom: '0px',
    visibility: 'visible',
  },
};

const SnackbarAnim = ({ in: inProp, children, customClass }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div
        id="content-snackbar"
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
        className={customClass}
      >
        {children}
      </div>
    )}
  </Transition>
);

SnackbarAnim.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
};

SnackbarAnim.defaultProps = {
  customClass: '',
};

export default SnackbarAnim;
