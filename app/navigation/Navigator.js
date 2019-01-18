import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieContainer from '../container/movie';
import MovieDetail from '../screens/detail';

import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createDrawerNavigator,
    createAppContainer
  } from "react-navigation";

  
  const MainStack = createStackNavigator(
    { Movie: MovieContainer, DetailScreen: MovieDetail },
    { initialRouteName: "Movie" }
  );
  
  // export const navReducer = createNavigationReducer(MainStack)

  // export const middleware = createReactNavigationReduxMiddleware(
  //   "root",
  //   state => state.nav,
  // );

  // const App = reduxifyNavigator(MainStack, "root");

  // const mapStateToProps = (state) => ({
  //   state: state.nav,
  // });

  // export const AppWithNavigationState = connect(mapStateToProps)(App);

  const AppContainer = createAppContainer(MainStack);

export default AppContainer

  