import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

const waitTime = 500;

class InfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', debounce(this.onScroll, waitTime), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', debounce(this.onScroll, waitTime), false);
  }

  onScroll() {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
      const { args, onScroll } = this.props;
      onScroll(...args);
    }
  }

  render() {
    const { children, className } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

InfiniteScroll.propTypes = {
  args: PropTypes.arrayOf(PropTypes.any),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onScroll: PropTypes.func.isRequired,
};

InfiniteScroll.defaultProps = {
  args: [],
  className: '',
};

export default InfiniteScroll;
