import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgb(243,190,138)",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  formContainer: {
    width: "80%",
    paddingHorizontal: 20,
    alignItems: "center"
  },
  inputContainer: {
    width: "100%",
    position: "absolute",
    aspectRatio: 1.1,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "rgb(252,242,232)"
  },
  nextCard: {
    top: 20,
    left: 20,
    backgroundColor: "red"
  },
  listContainer: {
    width: "60%",
    aspectRatio: 1.1,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "transparent"
  },
  title: {
    color: "rgb(243,190,138)"
  },
  formInputContainer: {
    borderBottomWidth: 0,
    marginBottom: 10
  },
  formInput: {
    width: "100%",
    color: "rgb(124,183,170)"
  },
  submit: {
    marginTop: 20,
    backgroundColor: "rgb(124,183,170)",
    height: 40,
    width: "70%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  inputContainer2: {
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "blue"
  },
  inputContainer3: {
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderColor: "white"
  },
  title2: {
    color: "white"
  },
  inputContainer4: {
    width: "50%",
    marginVertical: 10,
    borderRadius: 0,
    borderTopLeftRadius: 15,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: "rgba(255,255,255, 0.8)",
    borderColor: "rgb(243,190,138)"
  },
  inputContainer5: {
    width: "50%",
    marginVertical: 10,
    borderRadius: 0,
    borderTopRightRadius: 15,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: "rgba(255,255,255, 0.8)",
    borderColor: "rgb(243,190,138)"
  }
}));
