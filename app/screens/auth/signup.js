import React, {Component} from 'react'
import {View, Alert, StyleSheet, ScrollView, TouchableHighlight, Text, KeyboardAvoidingView, AsyncStorage} from 'react-native'
import AuthService from './../../services/authService'
import Auth from './../../util/auth'
import TextInput from './../../components/textInput'
import Colors from './../../config/colors'
import Constants from './../../config/constants'
import Header from './../../components/header'

export default class Signup extends Component {
    static navigationOptions = {
        title: 'Create new account',
    }

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            company: Constants.company_id,
            password1: '',
            password2: '',
        }
    }

    signup = async () => {
        await AsyncStorage.removeItem('wallet')
        await AsyncStorage.removeItem('user')
        let data = this.state;

        let responseJson = await AuthService.signup(data)
        if (responseJson.status === "success") {
            const loginInfo = responseJson.data
            if (data.mobile_number) {
                this.props.navigation.navigate("AuthVerifyMobile", {loginInfo, signupInfo:this.state})
            } else {
                Auth.login(this.props.navigation, loginInfo)
            }
        }
        else {
            Alert.alert('Error',
                responseJson.message,
                [{text: 'OK'}])
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    navigation={this.props.navigation}
                    back
                    title="Create new account"
                />
                <View style={styles.mainContainer}>
                    <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={85}>
                        <ScrollView keyboardDismissMode={'interactive'}>
                            <TextInput
                                title="Email"
                                underlineColorAndroid="white"
                                placeholder="e.g john@gmail.com"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                onChangeText={(email) => this.setState({email})}
                            />
                            <TextInput
                                title="Password"
                                placeholder="Password"
                                underlineColorAndroid="white"
                                autoCapitalize="none"
                                secureTextEntry
                                onChangeText={(password1) => this.setState({password1})}
                            />
                            <TextInput
                                title="Confirm password"
                                placeholder="Confirm password"
                                underlineColorAndroid="white"
                                autoCapitalize="none"
                                secureTextEntry
                                onChangeText={(password2) => this.setState({password2})}
                            />
                        </ScrollView>
                        <TouchableHighlight
                            style={styles.submit}
                            onPress={() => this.signup()}>
                            <Text style={{color: 'white', fontSize:20}}>
                                Sign up
                            </Text>
                        </TouchableHighlight>
                    </KeyboardAvoidingView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 10,
    },
    submit: {
        marginTop: 10,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.blue,
        marginHorizontal: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
