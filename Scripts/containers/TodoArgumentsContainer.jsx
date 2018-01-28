import { connect } from 'react-redux';
import TodoArguments from '../components/TodoArguments';
import {
  deleteTodoArgument,
} from '../actions/todoArgumentsActions';

const mapStateToProps = state => (
  {
    todoArguments: state.todoArguments.items,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onDeleteArgument: (argument) => {
      dispatch(deleteTodoArgument(argument));
    },
  }
);

const TodoArgumentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoArguments);

export default TodoArgumentsContainer;
