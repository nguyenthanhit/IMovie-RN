import React, { PureComponent } from 'react';
import {View, Image, Text, Button, StyleSheet} from 'react-native'

export default class MovieItemList extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {

        return(
            <View style = {[
                style.container, 
                {
                backgroundColor: this.props.index % 2 == 0 ? '#f73378' : 'gray'
                }
                ]
                }>

                <Text style ={ style.title}> {this.props.item.title}</Text>

                <Text style= {style.content}>{this.props.item.overview}</Text>

            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 10,
        marginRight: 16,
    },

    title: {
        color: 'orange',
        padding: 10,
        fontSize: 16
    },

    content: {
        color: 'white',
        marginLeft: 10,
        marginBottom: 8
    }
})