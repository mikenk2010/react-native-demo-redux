/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Scene1 from './Apps/Scene1.js';

import {Provider} from 'react-redux';
import reducers from './Apps/reducer.js';

import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
const store = createStore(reducers, devToolsEnhancer());


const defaultRoute = {
  title: 'Scene1',
  component: Scene1
}

export default class W2Exe extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator){
    return <route.component route={route} navigator={navigator} passProps={route.passProps} />
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={defaultRoute}
          renderScene={(route, navigator) => this.renderScene(route, navigator)}/>
      </Provider>
    )
  };
}


AppRegistry.registerComponent('W2Exe', () => W2Exe);
