import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../Button';
import Card from '../Card';
import { addCard } from '../../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({boards: state.boards, user: state.user})
const mapDispatchToProps = dispatch => ({
  addCard: bindActionCreators(addCard, dispatch),
})

class List extends Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      cards: PropTypes.array.isRequired,
      addCard: PropTypes.func.isRequired,
    };

    constructor(props) {
      super(props);
      this.state = {
        cardInput: '',
      };
    }

    addCard = () => {
      this.props.addCard(this.state.cardInput, this.props.id)
    }

    render() {
        return (
            <View style={styles.wrap}>
                <Text style={styles.title}>{this.props.title}</Text>
                {this.props.cards.map(card => <Card key={card.id} {...card} />)}
                <TextInput
                  style={styles.inputs}
                  onChangeText={cardInput => {
                    this.setState({ cardInput });
                  }}
                  value={this.state.cardInput}
                />
                <Button onClick={this.addCard} text="+ Create Card" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#ffa700',
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 5,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 10,
  },
  inputs: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List)
