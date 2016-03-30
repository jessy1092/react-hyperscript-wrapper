
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {wrapper} from 'react-hyperscript-wrapper';

import TodoApp from './components/TodoApp';
import configureStore from './store/configureStore';


const {WrapProvider} = wrapper({WrapProvider: Provider});

// 使用 react-redux 提供的 Provider
ReactDOM.render(
  WrapProvider({store: configureStore()},
    TodoApp()
  ),
  document.getElementById('root')
);
