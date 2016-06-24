import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import Button from './Button'
import greeter from './Greeter'
import CounterView from './CounterView'
import createStore from './Store'

const store = createStore()

const Styles = {
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9f9faf' },
  welcome: { fontSize: 20, textAlign: 'center', margin: 10 }
}

class Bajeezus extends Component {

  // build it up
  constructor (props) {
    super(props)
    // lets make a light switch!
    this.state = { lightSwitch: false }
    // rebind our button press handler to always run in this object's context
    this.handlePress = this.handlePress.bind(this)
  }

  // fires when the user taps the button
  handlePress () {
    // toggle the light switch
    this.setState({ lightSwitch: !this.state.lightSwitch })
    store.dispatch({type: 'TIME_TO_SHINE'})
  }

  // draw!
  render () {
    // make an appropriate title
    const title = this.state.lightSwitch
      ? 'Welcome To Testable React Native!'
      : 'Welcome To React Native!'

    const greetings = greeter('World')

    return (
      <Provider store={store}>
        <View style={Styles.container}>
          <Text style={Styles.welcome}>{greetings}</Text>
          <Text style={Styles.welcome}>{title}</Text>
          <Button text='Toggle' onPress={this.handlePress.bind(this)} />
          <CounterView />
        </View>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Bajeezus', () => Bajeezus)
