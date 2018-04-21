import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';

import labels from '../../constants/labels';
import { DONE } from '../../constants/steps';
import { addTodoArgument } from '../../actions/todoArgumentsActions';
import { showMessageInfo } from '../../actions/messageActions';

class SelectCompleteDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoWithin: new Date(),
    };
    this.onInputDateChange = this.onInputDateChange.bind(this);
    this.onButtonAddClick = this.onButtonAddClick.bind(this);
    this.onTodoArgumentCreated = this.onTodoArgumentCreated.bind(this);
  }

  onInputDateChange(date) {
    this.setState({ todoWithin: date });
  }

  onButtonAddClick() {
    const { todoWithin } = this.state;
    const { dispatch, options } = this.props;
    const { title, description, category } = options;
    if (todoWithin === '') {
      dispatch(showMessageInfo(labels.msgSelectDate));
      return;
    }
    dispatch(addTodoArgument(
      title, description,
      category, todoWithin, this.onTodoArgumentCreated,
    ));
  }

  onTodoArgumentCreated() {
    const { onNext } = this.props;
    onNext({ stepId: DONE, options: { } });
  }

  render() {
    const { todoWithin } = this.state;
    return (
      <div className="content-select-complete-date">
        <h2>Todo Within</h2>
        <div className="content-input">
          <DatePicker
            className="main-input"
            calendarClassName="dark-calendar"
            onChange={this.onInputDateChange}
            value={todoWithin}
            minDate={new Date()}
          />
        </div>
        <div>
          <button
            className="main-button"
            onClick={this.onButtonAddClick}
          >
            ADD
          </button>
        </div>
      </div>
    );
  }
}

SelectCompleteDate.propTypes = {
  dispatch: PropTypes.func.isRequired,
  options: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onNext: PropTypes.func.isRequired,
};

export default connect()(SelectCompleteDate);
