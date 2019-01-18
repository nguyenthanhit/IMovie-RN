/** @format */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/store';
import {name as appName} from './app.json';
import { Component } from 'react';
import AppContainer from './app/navigation/Navigator';
import  React  from 'react';

class App extends Component {
    render() {
        return(
            <Provider store = {store}>
                <AppContainer />
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => App);
