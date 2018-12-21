import React, { Component } from 'react';
import { View, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {URL} from '../../constants/Constants'
import MovieItemList from '../../components/MovieItemList'
import {MovieList} from '../MovieList'
import {MovieDetail} from '../MovieDetail'

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
      <View style={style.container}>
        <FlatList
          data ={this.state.dataList}
          renderItem ={({item, index}) => 
           <MovieItemList 
           item = {item} 
           index = {index} 
           onPress={this._goToDetail.bind(this)}/>
          }
          keyExtractor={({id}, index) => id}
        />  
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

  _goToDetail() {
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

const AppNavigator = createStackNavigator(
  {
    Movies: MovieList,
    Detail: MovieDetail 
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
