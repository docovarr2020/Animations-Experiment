import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  inputContainer: {
    width: "60%",
    aspectRatio: 1.1,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "rgb(252,242,232)"
  },
  title: {
    color: "rgb(74,74,74)"
  },
  formInputContainer: {
    borderBottomWidth: 0,
    marginBottom: 10
  },
  formInput: {
    width: "100%"
  }
}));
