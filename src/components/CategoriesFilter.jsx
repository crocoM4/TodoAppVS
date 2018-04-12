import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import scroll from 'scroll';
import ButtonScroll from './ButtonScoll';
import Category from './Category';
import Fade from './anims/Fade';

class CategoriesFilter extends React.Component {
  constructor(props) {
    super(props);
    this.chips = undefined;
    this.handleLeftScrollClick = this.handleLeftScrollClick.bind(this);
    this.handleRightScrollClick = this.handleRightScrollClick.bind(this);
    this.moveChipsScroll = this.moveChipsScroll.bind(this);
  }

  handleLeftScrollClick() {
    if (this.chips) {
      this.moveChipsScroll(-this.chips.clientWidth);
    }
  }

  handleRightScrollClick() {
    if (this.chips) {
      this.moveChipsScroll(this.chips.clientWidth);
    }
  }

  moveChipsScroll(delta) {
    if (this.chips) {
      const nextScrollLeft = this.chips.scrollLeft + delta;
      scroll.left(this.chips, nextScrollLeft);
    }
  }

  render() {
    const { categoryList, onDeleteCategory, onCilckCategory } = this.props;
    return (
      <div id="content-categories-filter">
        <ButtonScroll
          onClick={this.handleLeftScrollClick}
          direction="left"
        />
        <div
          className="categories-filter"
          ref={(node) => {
            this.chips = node;
          }}
        >
          <TransitionGroup style={{ display: 'inherit', paddingLeft: '1.25em', paddingRight: '1.25em' }}>
            {
              categoryList.map(category => (
                <Fade key={category.id}>
                  <Category
                    key={category.id}
                    category={category}
                    selected={category.selected}
                    onDelete={onDeleteCategory}
                    onClick={onCilckCategory}
                  />
                </Fade>
              ))
            }
          </TransitionGroup>
        </div>
        <ButtonScroll
          onClick={this.handleRightScrollClick}
          direction="right"
        />
      </div>
    );
  }
}

CategoriesFilter.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onDeleteCategory: PropTypes.func,
  onCilckCategory: PropTypes.func.isRequired,
};

CategoriesFilter.defaultProps = {
  onDeleteCategory: undefined,
};

export default CategoriesFilter;
