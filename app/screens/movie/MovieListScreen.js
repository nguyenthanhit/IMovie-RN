import React, { Component } from "react";
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator
} from "react-native";
import MovieItemComponent from "../../components/MovieItemComponent";
import styles from './styles';

export default class MoviesScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isRefreshing: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataList) {
      this.setState({
        isLoading: nextProps.isLoading,
        isRefreshing: nextProps.isRefreshing,
      })
    }
  
}

  render() {  
    if (this.state.isLoading) {
      return (
        <View
          style={styles.container}
        >
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style ={{backgroundColor: '#F5F5F5'}}>
        <FlatList
          data={this.props.dataList}
          renderItem={({ item, index }) => (
            <MovieItemComponent
              key={index.toString()}
              item={item}
              index={index}
              {...this.props}
            />
          )}
          keyExtractor={({ id }, index) => id.toString()}
          refreshing={this.state.isRefreshing}
          onRefresh={this.onRefresh}
          onEndReached={() => {
           
          }}
        />

        <Button
          title="Go to detail"
          onPress={() => {
            this.props.navigation.navigate("DetailScreen");
          }}
        />
      </View>
    );
  }
}

