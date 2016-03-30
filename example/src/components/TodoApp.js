
import React from 'react';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import basicComponent from './basic';

import {wrapper} from 'react-hyperscript-wrapper';

const {div} = basicComponent;

// Presentational component
// 負責 render 各個 Container component
const TodoApp = () => (
  div([
    AddTodo(),
    VisibleTodoList(),
    Footer()
  ])
);

export default wrapper({TodoApp}).TodoApp;
