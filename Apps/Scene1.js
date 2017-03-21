
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  TextInput,
} from 'react-native';

import Scene2 from '../Apps/Scene2.js';

import {connect} from 'react-redux';
import {actionCreators} from "./reducer.js";

class Scene1 extends Component {
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
          Scene 1
        </Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(actionCreators.storeDataScene1({dataReduxFromScene1: this.state.dataRedux})); //
            navigator.push({
              title: 'Scene2',
              component: Scene2,
              passProps: {dataPropsFromScene1: this.state.dataProps}
            });
          }}
          >
          <Text style={{fontSize:20, marginTop:10, marginBottom:40, padding:5, borderWidth:1, borderColor:'red'}}>Go to Scene 2</Text>
        </TouchableOpacity>

        <View>
          <Text>Case 1: Send data via props</Text>
          <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1, padding:5}}
           onChangeText={(dataProps) => this.setState({dataProps})}
           value={this.state.dataProps}
           placeholder="Data send via props..."
         />
         <Text>Data props: {this.state.dataProps}</Text>
        </View>

        <View style={{marginTop:20}}>
          <Text>Case 2: Send data via Redux</Text>
          <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1, padding:5}}
           onChangeText={(dataRedux) => this.setState({dataRedux})}
           value={this.state.dataRedux}
           placeholder="Data send via redux..."
         />
         <Text>Data redux: {this.state.dataRedux}</Text>
        </View>

        {(this.props.hehehe) ?
        <View style={{marginTop:50}}>
          <Text>Data from Scene3 </Text>
          <Text style={{fontWeight:'bold'}}>{this.props.hehehe.dataReduxFromScene3}</Text>
        </View>
        :<Text></Text>}


    </View>);
  }
}

const mapStateToProps = (state) => {
  return {
    hehehe : state.searchReducer.params
  }
}

export default connect(mapStateToProps)(Scene1);
