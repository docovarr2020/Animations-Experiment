import React, { Component } from "react";
import {
  View,
  Dimensions,
  Animated,
  PanResponder,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { FormLabel, FormInput, Text, TextInput } from "react-native-elements";
import styles from "./styles";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class AnimatedView extends Component {
  static propTypes = {
    // What Props might we need?
  };

  state = {
    // What should be stored in the state of THIS component?
  };

  handleChange = newText => {
    this.setState({ value: newText });
  };

  render() {
    return (
      <View style={[styles.inputContainer]}>
        <TouchableOpacity onPress={() => console.log("hello")}>
          <FormLabel labelStyle={styles.title}>Name</FormLabel>
        </TouchableOpacity>
      </View>
    );
  }
}
