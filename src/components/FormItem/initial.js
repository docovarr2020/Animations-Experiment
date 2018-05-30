import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { FormLabel, FormInput, Text, TextInput } from "react-native-elements";
import styles from "./styles";

export default class Initial extends Component {
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
      <View style={styles.inputContainer}>
        <FormLabel labelStyle={styles.title}>Name</FormLabel>
        <FormInput
          containerStyle={styles.formInputContainer}
          inputStyle={styles.formInput}
          placeholder={"John"}
          onChangeText={this.handleChange}
        />
      </View>
    );
  }
}
