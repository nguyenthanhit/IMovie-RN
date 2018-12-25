import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, Button, Image, FlatList, ActivityIndicator } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import MovieDetail from '../MovieDetail/index'
import {URL} from '../../constants/Constants'
import MovieItemComponent from '../../components/MovieItemComponent' 

 class Movies extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  static navigationOptions = {
    title: 'Home',
    
  }

  render() {

    if (this.state.isLoading) {
      return(
        <View style ={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <ActivityIndicator /> 
        </View>
      )
    }

    return (
      <View>
        <FlatList
          data ={this.state.dataList}
          renderItem ={({item, index}) => 
           <MovieItemComponent item = {item}  index = {index} {...this.props}/>
          }
          keyExtractor={({id}, index) => id}
        />  

        <Button title="Go to detail" onPress={() => {
            this.props.navigation.navigate('DetailScreen')
        }}/>
      </View>
    )
};

  async componentDidMount(){
    try {
      const response = await fetch(URL);
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataList: responseJson.results,
      });
    }
    catch (error) {
      console.error(error);
    }
  }
}

const RootStack = createStackNavigator(
  {
    Home: Movies,
    DetailScreen:  MovieDetail
  },

  {
    initialRouteName: 'Home'
  }
)

export const AppContainer = createAppContainer(RootStack);

export default class MainApplication extends Component {
  render() {
    return <AppContainer />;
  }
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})