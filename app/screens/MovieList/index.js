import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, Button } from 'react-native';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={style.container}>
        <Text> Movies List </Text>
        <Button title="SpiderMan" onPress={this._goToDetail("SpiderMan")}/>
        <Button title="SpiderPid" onPress={this._goToDetail("SpiderPid")}/>
      </View>
    );
  };

  _goToDetail( movieName : String){
    Alert.alert("You tapped the button " + movieName)
  }
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    marginTop: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
  }
})