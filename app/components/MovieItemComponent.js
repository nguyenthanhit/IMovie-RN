import React, { PureComponent } from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import { IMAGE_URL } from "../constants/Constants";
import { green_4c, gray_37, pink_c2 } from "../constants/Color";

export default class MovieItemComponent extends PureComponent {
  constructor(props) {
    super(props);
    
  }

  render() {
    let imagePath = IMAGE_URL + this.props.item.poster_path;

    _openDetailScreen = () => {
      const { navigate } = this.props.navigation;
      navigate("DetailScreen");
    }

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          _openDetailScreen();
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" , marginTop: 8}}>
          <View
            style={
              style.container
            }
          >
            <Image
              source={{ uri: imagePath }}
              style={{ resizeMode: 'stretch', height: 150, flex: 1, alignContent: 'center', justifyContent: 'center' }}
            />

        
          </View>

          <View style={{flex: 2, flexDirection: "column" , marginTop: 16, backgroundColor: this.props.index % 2 == 0 ? pink_c2 : green_4c}}>
              <Text style={style.title}> {this.props.item.title}</Text>

              <Text numberOfLines={2} style={style.content}>
                {this.props.item.overview}
              </Text>

              <Button
                title="Detail"
                style={style.btnDetail}
                color="orange"
                onPress={() => _openDetailScreen()}
              />
            </View>
          {/* <View style={style.divider} /> */}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 16,
    zIndex: 1
  },

  title: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 16  
  },

  content: {
    color: "white",
    marginLeft: 10,
    marginBottom: 8
  },

  divider: {
    backgroundColor: "white",
    height: 1
  },

  btnDetail: {
    marginLeft: 10
  }
});
