import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import database from '../config'

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      enteredEmailId: '',
      enteredPassword: '',
    };
  }

  registerUser=async(emailId,password)=>{
      firebase.auth()
      .createUserWithEmailAndPassword(emailId,password)
      .then(()=>{
          Alert.alert("User added successfully!")
      })
      .catch((error)=>{
          Alert.alert(error.message)
      })
  } 

  render() {
    return (
      <View>
        <View style={styles.emailContainer}>
          <TextInput
            placeholder="Email ID"
            value={this.state.enteredEmailId}
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({ enteredEmailId: text });
            }}
            style={styles.email}
          />
        </View>
        <View style={[styles.emailContainer, { marginTop: 20 }]}>
          <TextInput
            placeholder="Password"
            value={this.state.enteredPassword}
            keyboardType="password"
            onChangeText={(text) => {
              this.setState({ enteredPassword: text });
            }}
            style={styles.email}
          />
        </View>
        <TouchableOpacity
          style={{
            width: '60%',
            borderWidth: 2,
            alignSelf: 'center',
            borderRadius: 30,
            height: 40,
            marginTop: 30,
            backgroundColor: 'red',
            borderColor: 'white',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              marginTop: 9,
              fontWeight: 'bold',
            }}>
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '60%',
            borderWidth: 2,
            alignSelf: 'center',
            borderRadius: 30,
            height: 40,
            marginTop: 5,
            backgroundColor: 'red',
            borderColor: 'white',
          }}
           onPress={()=>{
            this.registerUser()
           }}
          >
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              marginTop: 9,
              fontWeight: 'bold',
            }}>
            Register
          </Text>
        </TouchableOpacity>
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
  },
  emailContainer: {
    width: '80%',
    borderWidth: 2,
    alignSelf: 'center',
    height: 50,
    marginTop: 50,
    borderRadius: 30,
    outline:'none'
  },
});
