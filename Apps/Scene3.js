
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

import {connect} from "react-redux";
import {actionCreators} from "./reducer.js";

class Scene3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataReduxScene3 : ''
    }
  }

  render() {
    const {navigator, dispatch} = this.props;
    return (
      <View
        style={{padding: 20}}>
        <Text style={{fontSize:50}}>
          Scene 3
        </Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(actionCreators.storeDataScene3({dataReduxFromScene3: this.state.dataReduxScene3}));
            navigator.pop();
          }}
          >
          <Text style={{fontSize:20, marginTop:10, marginBottom:40, padding:5, borderWidth:1, borderColor:'red'}}>Go Back</Text>
        </TouchableOpacity>

        <View>
          <Text>Case 1: Get data via props</Text>
         <Text style={{fontWeight:'bold'}}>{this.props.passProps.dataPropsFromScene1}</Text>
        </View>

        <View style={{marginTop:50}}>
          <Text>Case 2: Get data via Redux</Text>

          <Text style={{fontWeight:'bold'}}>{this.props.hahaha.dataReduxFromScene1}</Text>
        </View>

        <View style={{marginTop:20}}>
          <Text>Case 3: Send back data rom Scene 3 to Scene 1</Text>
          <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1, padding:5}}
           onChangeText={(value) => this.setState({dataReduxScene3 : value})}
           value={this.state.dataReduxScene3}
           placeholder="Data send via redux..."
         />
         <Text>Data redux: {this.state.dataReduxScene3}</Text>
        </View>
        <Button title="Go Back" onPress={() => {
          dispatch(actionCreators.storeDataScene3({dataReduxFromScene3: this.state.dataReduxScene3}));
          navigator.pop();
        }}
         />
    </View>);
  }
}

const mapStateToProps = (state) =>{
  return{
    hahaha : state.searchReducer.params
  }
}

export default connect(mapStateToProps)(Scene3);
