import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Resize from './anims/Resize';
import TodoArgument from './TodoArgument';
import InfiniteScroll from './InfiniteScroll';
import { queryItemsLimit } from '../constants/config';

const initialState = {
  limit: queryItemsLimit,
  skip: 0,
};

class TodoArguments extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.skip !== prevState.skip) {
      return {
        skip: nextProps.skip,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = initialState;
    this.onFetchTodoArgumentsNext = this.onFetchTodoArgumentsNext.bind(this);
  }

  onFetchTodoArgumentsNext() {
    const {
      categoriesId, completed,
      fetchTodoArguments, moreToLoad,
    } = this.props;
    if (!moreToLoad) {
      return;
    }
    const { limit, skip } = this.state;
    const newSkip = skip + limit;
    this.setState({ skip: newSkip });
    fetchTodoArguments(categoriesId, completed, limit, newSkip);
  }

  render() {
    const {
      listTodoArguments,
      onDeleteArgument,
      onCompleteArgument,
    } = this.props;
    return (
      <div id="content-todo-arguments">
        <InfiniteScroll onScroll={this.onFetchTodoArgumentsNext}>
          <TransitionGroup>
            {
              listTodoArguments.map(arg => (
                <Resize key={arg.id}>
                  <TodoArgument
                    key={arg.id}
                    argument={arg}
                    onDelete={() => onDeleteArgument(arg)}
                    onComplete={() => onCompleteArgument(arg)}
                  />
                </Resize>
              ))
            }
          </TransitionGroup>
        </InfiniteScroll>
      </div>
    );
  }
}

TodoArguments.propTypes = {
  onDeleteArgument: PropTypes.func.isRequired,
  onCompleteArgument: PropTypes.func.isRequired,
  listTodoArguments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    category: PropTypes.shape({}).isRequired,
  }).isRequired).isRequired,
  moreToLoad: PropTypes.bool.isRequired,
  fetchTodoArguments: PropTypes.func.isRequired,
  categoriesId: PropTypes.arrayOf(PropTypes.string).isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoArguments;
