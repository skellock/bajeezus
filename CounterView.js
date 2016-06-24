import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const Styles = {
  container: {},
  counter: { fontSize: 50, textAlign: 'center' },
  rpod: { fontSize: 8, textAlign: 'center' }
}

class CounterView extends Component {
  render () {
    const { value, randomPieceOfData } = this.props
    return (
      <View style={Styles.container}>
        <Text style={Styles.counter}>{value}</Text>
        <Text style={Styles.fpod}>{randomPieceOfData}</Text>
      </View>
    )
  }
}

CounterView.propTypes = {
  value: PropTypes.number,
  randomPieceOfData: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    value: state.counter.value,
    randomPieceOfData: state.user.randomPieceOfData
  }
}

export default connect(mapStateToProps)(CounterView)
