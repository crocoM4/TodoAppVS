import { connect } from 'react-redux';
import TodoArguments from '../components/TodoArguments';
import * as action from '../actions';

const mapStateToProps = state => (
  {
    todoArguments: state.todoArguments.items,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onDeleteArgument: (argument) => {
      dispatch(action.deleteArgument(argument));
    },
  }
);

const TodoArgumentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoArguments);

export default TodoArgumentsContainer;
