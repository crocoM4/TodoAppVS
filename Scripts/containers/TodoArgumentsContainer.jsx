import { connect } from 'react-redux';
import TodoArguments from '../components/TodoArguments';
import {
  deleteTodoArgument,
} from '../actions/todoArgumentsActions';

import { getFilteredTodoArguments } from '../selectors/commonSelectors';

const mapStateToProps = state => (
  {
    listFilteredTodoArguments: getFilteredTodoArguments(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    onDeleteArgument: (argument) => {
      dispatch(deleteTodoArgument(argument.id));
    },
  }
);

const TodoArgumentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoArguments);

export default TodoArgumentsContainer;
