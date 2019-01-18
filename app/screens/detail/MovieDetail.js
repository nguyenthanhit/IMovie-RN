import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from './styles';


export default class MovieDetail extends Component {
    static navigationOptions = {
        title: 'Details',
      }

    render() {
        return (
            <View style={styles}>
                <Text>MovieDetail</Text>
                <Text>MovieDetail</Text>
            </View>
        );
    }
}



