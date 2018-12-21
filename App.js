import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { MovieList } from './app/screens/MovieList';
import { MovieDetail } from './app/screens/MovieDetail';

export class HomePage extends Component {
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
        <Button title="Welcome to IMovie" 
        onPress={() => {
          navigate('Movies', {})
        }}/>
      </View>
    );
  };
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
    Movies: MovieList,
    Detail: MovieDetail 
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);