import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
    MovieList: {screen: MovieList},
    MovieDetail: {screen: MovieDetail},
  });

export default createAppContainer(AppNavigator);
