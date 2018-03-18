import { connect } from 'react-redux';
import TodoArguments from '../components/TodoArguments';
import {
  deleteTodoArgument,
  toogleTodoArgumentCompleted,
} from '../actions/todoArgumentsActions';

import { getFilteredTodoArguments } from '../selectors/todoArgumentsSelectors';

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
    onCompleteArgument: (argument) => {
      dispatch(toogleTodoArgumentCompleted(argument.id, argument.completed));
    },
  }
);

const TodoArgumentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoArguments);

export default TodoArgumentsContainer;
