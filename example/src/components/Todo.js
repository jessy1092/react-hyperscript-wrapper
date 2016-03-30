
import React from 'react';
import {wrapper} from 'react-hyperscript-wrapper';

import basicComponent from './basic';

const {li} = basicComponent;

// Presentational Component
const Todo = ({onClick, completed, text}) => (
  li({
    onClick,
    style: {textDecoration: () => completed ? 'line-through' : 'none'}
  }, text)
);

export default wrapper({Todo}).Todo;
