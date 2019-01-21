import React, { Component } from 'react';
import {connect} from 'react-redux';
import MoviesScreen from '../screens/movie';
import { bindActionCreators } from 'redux';
import  * as movieAction from '../actions/movie';

class MovieContainer extends Component {
    
  componentDidMount() {
      this.props.actions.fetchData()
  }

  _openDetailScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("DetailScreen");
  }
  

  render() {
    return (
        <MoviesScreen ref = "Child" {...this.props} openDetailScreen = {() => {
            console.log("DetailScreen")
        }}/>
    );

    console.log(ref)
  }
}

function mapDispatchToProps(dispatch) {
    return({
        actions: bindActionCreators(movieAction, dispatch)
    })
}

function mapStateToProps(state) {
    return {
        dataList: state.getMovie.data,
        isLoading: state.getMovie.isLoading,
        isRefreshing: state.getMovie.isRefreshing
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)