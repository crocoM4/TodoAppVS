import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const duration = 100;

const defaultStyle = {
  transition: 'opacity 400ms ease-in-out',
  opacity: 0,
  display: 'inherit',
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);

Fade.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Fade;
