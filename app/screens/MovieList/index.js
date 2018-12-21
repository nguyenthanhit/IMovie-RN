import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, Button, Image, FlatList, ActivityIndicator } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {URL} from '../../constants/Constants'
import MovieItemList from '../../components/MovieItemList'

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
           <MovieItemList item = {item} index = {index} />
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
