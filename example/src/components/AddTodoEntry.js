
import React from 'react';
import {wrapper} from 'react-hyperscript-wrapper';

import basicComponent from './basic';

const {div, input, button} = basicComponent;

const AddTodoEntry = ({onClick}) => {
  let inputRef;

  return (
    div([
      input({ref: node => inputRef = node}),
      button({
        onClick: () => {
          onClick(inputRef.value);
          inputRef.value = '';
        }
      }, 'Add Todo')
    ])
  );
};

export default AddTodoEntry;
