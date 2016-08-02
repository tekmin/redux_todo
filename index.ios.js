/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Todo from './src/components/Todo';
import { createStore } from 'redux';
import RootReducers from './src/reducers/RootReducers';

let store = createStore(RootReducers);

class ReduxTodo extends Component {
  render() {
    return (
      <Todo />
    );
  }
}

AppRegistry.registerComponent('ReduxTodo', () => ReduxTodo);
