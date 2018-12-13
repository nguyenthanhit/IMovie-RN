import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
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
        onPress={this._goToDetail}/>
        <Button 
        style={styles.button}
        title="SpiderPid" 
        onPress={this._goToDetail}
        color= "blue"
        borderColor='black'
        backgroundColor='red' />
      </View>
    );
  };

  _goToDetail() {
    Alert.alert("You tapped the button ")
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
const AppNavigator = createStackNavigator(
  {
    Movies: MovieList
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);