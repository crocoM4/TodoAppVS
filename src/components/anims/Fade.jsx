import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const duration = 200;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  display: 'inherit',
  visibility: 'hidden',
};

const transitionStyles = {
  entering: { opacity: 0, visibility: 'hidden' },
  entered: { opacity: 1, visibility: 'visible' },
};

const Fade = ({ ...props, children }) => (
  <Transition {...props} timeout={duration}>
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
  children: PropTypes.node.isRequired,
};

export default Fade;
