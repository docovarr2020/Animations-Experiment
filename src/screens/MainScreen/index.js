import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  Dimensions,
  PanResponder,
  TouchableOpacity,
  Animated
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  BaseForm,
  RandItemForm,
  FinalForm,
  FormItem,
  AnimatedView
} from "../../components";
import { showModal, hideModal } from "../../redux/actions";
import styles from "./styles";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const NUM_ITEMS = 2;

const mapStateToProps = state => ({ boards: state.boards, user: state.user });

class MainScreen extends Component {
  state = {
    currentIndex: 0
  };

  position = new Animated.ValueXY();

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      /* This will allow you to have touchable children as it tells
      ** the OS that the outer view is no longer the responder if we
      ** have not swiped it, that is, if the change and x and y are
      ** both 0 */

      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        return gestureState.dx != 0 && gestureState.dy != 0;
      },

      // This line says that we are going to move the view
      onStartShouldSetPanResponder: (evt, gestureState) => true,

      // This line tells us what to do when we are moving
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },

      // This line tells us what to do when we stop moving
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start();
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start();
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start();
        }
      }
    });
  }

  handleChange = (key, newText) => {
    this.setState({ [key]: newText });
  };

  submit = () => console.log(JSON.stringify(this.state));

  renderItems = () => {
    const items = [];
    for (i = 0; i < NUM_ITEMS; i++) {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i === this.state.currentIndex) {
        items.push(
          <Animated.View
            key={i}
            style={[
              styles.inputContainer,
              { transform: [...this.position.getTranslateTransform()] }
            ]}
            {...this.PanResponder.panHandlers}
          >
            <AnimatedView />
          </Animated.View>
        );
      } else {
        items.push(
          <Animated.View
            key={i}
            style={[styles.inputContainer, styles.nextCard]}
          >
            <AnimatedView />
          </Animated.View>
        );
      }
    }
    return items.reverse();
  };

  render() {
    return (
      <View style={styles.background}>
        <View style={[styles.inputContainer, styles.listContainer]}>
          {this.renderItems()}
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(MainScreen);
