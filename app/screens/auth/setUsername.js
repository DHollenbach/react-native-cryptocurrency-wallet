import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native'
import StellarService from './../../services/stellarService'
import ResetNavigation from './../../util/resetNavigation'
import TextInput from './../../components/textInput'
import Colors from './../../config/colors'
import Header from './../../components/header'

export default class SetUsername extends Component {
  static navigationOptions = {
    title: 'Set Username',
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
  }

  verify = async () => {
    let response = await StellarService.setUsername(this.state.username)
    let stellarResponse = await response.json()
    console.log(stellarResponse)
    if (stellarResponse.federated_address) {
      ResetNavigation.dispatchToSingleRoute(this.props.navigation, "Home")
    }
    else {
      Alert.alert('Error',
        stellarResponse.data[0],
        [{ text: 'OK' }])
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          navigation={this.props.navigation}
          title="Set Username"
        />
        <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
          <View style={{ flex: 1 }}>
            <TextInput
              title="Set a username"
              placeholder="e.h. john_snow"
              autoCapitalize="none"
              onChangeText={(username) => this.setState({ username })}
            />
          </View>
          <View style={styles.buttons}>
            <TouchableHighlight
              style={styles.submit}
              onPress={this.verify}>
              <Text style={{ color: 'white', fontSize: 20 }}>
                Set
            </Text>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  submit: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.lightblue,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    height: 65,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
})
