
import {connect} from 'react-redux';
import {wrapper} from 'react-hyperscript-wrapper';

import AddTodoEntry from '../components/AddTodoEntry';
import {addTodo} from '../actions/todo';


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (text) => {
      dispatch(addTodo(text));
    }
  }
}

// state 不必要, dispatch 使用預設的 dispatch, 所以都可以省略為 null

const {AddTodo} = wrapper({
  AddTodo: connect(null, mapDispatchToProps)(AddTodoEntry)
});

export default AddTodo;
