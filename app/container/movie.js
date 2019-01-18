import React, { Component } from 'react';
import {connect} from 'react-redux';
import MoviesScreen from '../screens/movie';
import { bindActionCreators } from 'redux';
import  * as movieAction from '../actions/movie';

class MovieContainer extends Component {
    
  componentDidMount() {
      this.props.actions.fetchData()
  }

  render() {
    return (
        <MoviesScreen {...this.props}/>
    );
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