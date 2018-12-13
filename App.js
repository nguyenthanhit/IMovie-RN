import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { MovieList } from './app/screens/MovieList';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> IMovie </Text>
        <Button title="Go To List" onPress={() => {
          navigate('Movies', {name: 'SpiderMan'})
        }}/>
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
    Home: HomePage,
    Movies: MovieList
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);