import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import LoginScreen from './screens/LoginScreen'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
//do ctrl+c in cmd 
  render() {
    return (
      <View>
        <LoginScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  email: {
    fontSize: 16,
    marginTop: 10,
    outline: 'none',
    textAlign: 'center',
  }
});
