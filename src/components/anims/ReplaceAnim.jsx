import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const duration = 250;

const defaultStyle = {
  width: '100%',
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  display: 'inherit',
};

const transitionStyles = {
  enter: { opacity: 0 },
  entered: { opacity: 1 },
};

const ReplaceAnim = ({ in: inProp, endListener, children }) => (
  <Transition
    in={inProp}
    timeout={duration}
    addEndListener={endListener}
  >
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

ReplaceAnim.propTypes = {
  in: PropTypes.bool.isRequired,
  endListener: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ReplaceAnim;
