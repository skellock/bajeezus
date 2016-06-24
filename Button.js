import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text } from 'react-native'

// time to make our designers proud
const Styles = {
  container: { backgroundColor: 'blue', margin: 20 },
  text: { color: 'white', padding: 20 }
}

// Your average run of the mill Button component.
class Button extends Component {
  // draw!
  render () {
    return (
      <TouchableOpacity style={Styles.container} onPress={this.props.onPress}>
        <Text style={Styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

// Our button requires these properties to be passed in
Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

// away you go little button, :'(
export default Button
