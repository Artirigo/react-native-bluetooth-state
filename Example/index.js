/** @format */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import BluetoothState from 'react-native-bluetooth-state';

import { name as appName } from './app.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bluetooth: 'unknown',
    };
  }

  componentDidMount() {
    BluetoothState.subscribe(bluetoothState => {
      this.setState({ bluetooth: bluetoothState });
      console.log(bluetoothState);
    });
    BluetoothState.initialize();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>What is my bluetooth state?</Text>
        <Text style={styles.instructions}>{this.state.bluetooth}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent(appName, () => App);
