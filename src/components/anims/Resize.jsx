import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const duration = {
  enter: 300,
  exit: 200,
};

const defaultStyle = {
  transition: `all ${duration.enter}ms ease-in-out`,
  height: 0,
  opacity: 0,
};

const onEnter = (node) => {
  const { style } = node;
  style.height = `${node.firstElementChild.offsetHeight}px`;
  style.opacity = 1;
};

const onEntered = (node) => {
  const { style } = node;
  style.height = 'auto';
};

const onExit = (node) => {
  const { style } = node;
  style.height = `${node.firstElementChild.offsetHeight}px`;
};

const onExited = (node) => {
  const { style } = node;
  style.height = '0px';
  style.opacity = 0;
};


const Resize = ({ ...props, children }) => (
  <Transition
    {...props}
    onEnter={onEnter}
    onEntered={onEntered}
    onExit={onExit}
    onExited={onExited}
    timeout={duration}
  >
    {() => (
      <div style={{
          ...defaultStyle,
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);

Resize.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Resize;
