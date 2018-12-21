import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export class MovieDetail extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    static navigationOptions = {
        title: 'Details',
      }

    render() {
        return (
            <View style={styles.container}>
                <Text>MovieDetail</Text>
                <Text>MovieDetail</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
});
