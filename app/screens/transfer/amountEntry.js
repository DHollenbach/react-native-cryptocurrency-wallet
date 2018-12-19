import React, {Component} from 'react'
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    AsyncStorage,
    StyleSheet,
    TouchableHighlight,
    Text,
    Alert,
    TouchableWithoutFeedback
} from 'react-native'
import reexService from '../../services/reexService'
import ResetNavigation from './../../util/resetNavigation'
import TextInput from './../../components/textInput'
import Colors from './../../config/colors'
import Header from './../../components/header'
import Big from 'big.js'

export default class AmountEntry extends Component {
    static navigationOptions = {
        title: 'Send money',
    }


    constructor(props) {
        super(props)
        const params = this.props.navigation.state.params
        console.log(params)
        this.state = {
            reference: params.reference,
            amount: 0,
            balance: 0,
            disabled: false
        }
    }

    transferConfirmed = async (amount) => {
        let responseJson = await reexService.sendMoney(amount, this.state.reference, 'default')
        if (responseJson.status === 201) {
            Alert.alert('Success',
                "Transaction successful",
                [{ text: 'OK', onPress: () => ResetNavigation.dispatchToSingleRoute(this.props.navigation, "Home") }])
        }
        else {
            Alert.alert('Error',
                "Transaction failed",
                [{ text: 'OK' }])
        }
    }

    componentWillMount(){
        this.getBalanceInfo()
    }

    send = async () => {
        if (this.state.amount <= 0) {
            Alert.alert(
                'Invalid',
                'Enter valid amount',
                [[{text: 'OK'}]]
            )
        }
        else {
            const data = await AsyncStorage.getItem('currency')
            const currency = JSON.parse(data)
            let amount = new Big(this.state.amount)
            for (let i = 0; i < currency.divisibility; i++) {
              amount = amount.times(10)
            }
            Alert.alert(
                'Are you sure?',
                'Send ' + currency.symbol + this.state.amount + ' to ' + this.state.reference,
                [
                    {text: 'Yes', onPress: () => this.transferConfirmed(amount)},
                    {
                        text: 'No',
                        onPress: () => ResetNavigation.dispatchToSingleRoute(this.props.navigation, "Home"),
                        style: 'cancel'
                    },
                ]
            )
        }
    }
    setBalance = (balance, divisibility) => {
        for (let i = 0; i < divisibility; i++) {
            balance = balance / 10
        }

        return balance
    }
    getBalanceInfo = async () => {
        const wallet = await AsyncStorage.getItem('wallet')
        let responseJson = await reexService.getBalance(wallet.id, wallet.email)
        if (responseJson.status === "success") {
            this.setState({ balance: this.setBalance(responseJson.available_balance, responseJson.divisibility) })
        }
    }

    amountChanged = (text) => {
        let amount = parseFloat(text)
        if (isNaN(amount)) {
            this.setState({amount: 0})
        }
        else {
            this.setState({amount})
            if (amount > this.state.balance) {
                this.setState({
                    disabled: true
                })
            } else {
                this.setState({
                    disabled: false
                })
            }
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    navigation={this.props.navigation}
                    back
                    title="Send money"
                />
                <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
                    <ScrollView keyboardDismissMode={'interactive'}>
                        <TextInput
                            title="Amount"
                            placeholder="Enter amount here"
                            autoCapitalize="none"
                            keyboardType="numeric"
                            underlineColorAndroid="white"
                            onChangeText={this.amountChanged}
                        />
                        <TextInput
                            title="Note"
                            placeholder="Enter note here"
                            autoCapitalize="none"
                            placeholderTextColor="lightgray"
                            multiline={true}
                            underlineColorAndroid="white"
                            onChangeText={(note) => this.setState({note})}
                        />
                    </ScrollView>
                    {   this.state.disabled ?
                        <TouchableWithoutFeedback>
                            <View style={[styles.submit, {backgroundColor: Colors.lightgray}]}>
                                <Text style={{color: 'white', fontSize: 20}}>
                                    Amount exceeds balance
                                </Text>
                            </View>
                        </TouchableWithoutFeedback > :
                        <TouchableHighlight
                            style={styles.submit}
                            onPress={this.send}>

                            <Text style={{color: 'white', fontSize: 20}}>
                                Send
                            </Text>
                        </TouchableHighlight>

                    }
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
        paddingTop: 10
    },
    submit: {
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 25,
        height: 50,
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
