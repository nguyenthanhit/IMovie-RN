import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { MovieDetail } from '../MovieDetail';

export class MovieList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Movies List </Text>
        <Button  
          style={styles.button}
          title="SpiderMan"
          color='red'
          backgroundColor='blue'
          onPress={() => {
            navigate('Detail', {})
          }}/>
        <Button 
          style={styles.button}
          title="SpiderPid" 
          color= "blue"
          borderColor='black'
          backgroundColor='red'
          onPress={this._goToDetail.bind(this, "SpiderPid")}/>
      </View>
    );
  };

  _goToDetail(itemName) {
      console.log(itemName)
      const {navigate} = this.props.navigation;

    navigate('Detail')
  }
} 
const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button : {
    color: "#841584",
    margin: 50,
    backgroundColor: "blue",
    borderColor: 'black',
  }
})
