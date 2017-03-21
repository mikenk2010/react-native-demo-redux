
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  TextInput,
  Button
} from 'react-native';

import Scene3 from "./Scene3.js";

export default class Scene2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProps : '',
      dataRedux : ''
    }
  }


  render() {
    const {navigator, dispatch} = this.props;
    return (
      <View
        style={{padding: 20}}>
        <Text style={{fontSize:50}}>
          Scene 2
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigator.push({
              title: 'Scene2',
              component: Scene3,
              passProps: {dataPropsFromScene1: this.props.passProps.dataPropsFromScene1} // Pass data via passProps again
            });
          }}
          >
          <Text style={{fontSize:20, marginTop:10, marginBottom:40, padding:5, borderWidth:1, borderColor:'red'}}>Go to Scene 3</Text>
        </TouchableOpacity>


        <View>
          <Text>Case 1: Get data via props</Text>
         <Text style={{fontWeight:'bold'}}>{this.props.passProps.dataPropsFromScene1}</Text>
        </View>

        <View style={{marginTop:50}}>
          <Text>Case 2: We do not get data from Scene 2</Text>
        </View>
        <Button title="Go Back" onPress={() => navigator.pop()} />
    </View>);
  }
}
