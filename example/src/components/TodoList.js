
import React from 'react';
import {wrapper} from 'react-hyperscript-wrapper';

import Todo from './Todo';
import basicComponent from './basic';


const {ul} = basicComponent;

// Presentational Component
const TodoList = ({todos, onTodoClick}) => (
  ul(
    todos.map(todo =>
      Todo({
        key: todo.id,
        onClick: () => onTodoClick(todo.id),
        ...todo
      })
    )
  )
);

export default TodoList;
