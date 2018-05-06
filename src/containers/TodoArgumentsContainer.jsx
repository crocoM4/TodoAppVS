import { connect } from 'react-redux';
import TodoArguments from '../components/TodoArguments';
import {
  fetchTodoArgumentsByCategory,
  deleteTodoArgument,
  toogleTodoArgumentCompleted,
} from '../actions/todoArgumentsActions';

import { getTodoArgumentsList, getSkip, stillMoreToLoad } from '../selectors/todoArgumentsSelectors';
import { getSelectedCategoriesId, visibilityOnlyCompleted } from '../selectors/todoFiltersSelectors';

const mapStateToProps = state => (
  {
    listTodoArguments: getTodoArgumentsList(state),
    skip: getSkip(state),
    moreToLoad: stillMoreToLoad(state),
    categoriesId: getSelectedCategoriesId(state),
    completed: visibilityOnlyCompleted(state),
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
    fetchTodoArguments: (categoriesId, completed, limit, skip) => {
      dispatch(fetchTodoArgumentsByCategory(categoriesId, completed, limit, skip));
    },
  }
);

const TodoArgumentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoArguments);

export default TodoArgumentsContainer;
