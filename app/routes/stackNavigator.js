import { StackNavigator} from 'react-navigation'

import Home from './drawerNavigator'
import Login from './../screens/auth/login'
import Signup from './../screens/auth/signup'
import AuthVerifyMobile from './../screens/auth/verifyMobile'
import SetUsername from './../screens/auth/setUsername'
import ForgetPassword from './../screens/auth/forgetPassword'
import BankAccounts from './../screens/withdraw/bankAccounts'
import BitcoinAddresses from './../screens/withdraw/bitcoinAddresses'
import WithdrawalAmountEntry from './../screens/withdraw/amountEntry'
import SendMoney from './../screens/transfer/amountEntry'
import SendTo from './../screens/transfer/sendTo'
import QRcodeScanner from './../screens/transfer/qrcodeScanner'
import AccountCurrencies from './../screens/accounts/accountCurrencies'
import UploadImage from './../screens/settings/profileImage/uploadImage'
import SettingsPersonalDetails from './../screens/settings/personalDetails'
import SettingsMobileNumbers from './../screens/settings/mobileNumbers/mobileNumbers'
import AddMobileNumber from './../screens/settings/mobileNumbers/addMobileNumber'
import VerifyMobileNumber from './../screens/settings/mobileNumbers/verifyMobile'
import SettingsEmailAddresses from './../screens/settings/emailAddresses/emailAddresses'
import AddEmailAddress from './../screens/settings/emailAddresses/addEmailAddress'
import SettingsGetVerified from './../screens/settings/getVerified/getVerified'
import Document from './../screens/settings/getVerified/document'
import DocumentUpload from './../screens/settings/getVerified/documentUpload'
import SettingsAddress from './../screens/settings/address'
import SettingsBankAccounts from './../screens/settings/bankAccounts/bankAccounts'
import SettingsBitcoinAddresses from './../screens/settings/bitcoinAddresses/bitcoinAddresses'
import AddBankAccount from './../screens/settings/bankAccounts/addBankAccount'
import EditBankAccount from './../screens/settings/bankAccounts/editBankAccount'
import AddBitcoinAddress from './../screens/settings/bitcoinAddresses/addBitcoinAddress'
import EditBitcoinAddress from './../screens/settings/bitcoinAddresses/editBitcoinAddress'
import SettingsCards from './../screens/settings/cards'
import SettingsSecurity from './../screens/settings/security/security'
import ChangePassword from './../screens/settings/security/changePassword'
import TwoFactor from './../screens/settings/security/twoFactor'
import SettingsNotifications from './../screens/settings/notifications/notifications'
import EmailNotifications from './../screens/settings/notifications/emailNotifications'
import MobileNotifications from './../screens/settings/notifications/mobileNotifications'

const Stack = {
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
  AuthVerifyMobile: {
    screen: AuthVerifyMobile,
  },
  SetUsername: {
    screen: SetUsername,
  },
  ForgetPassword: {
    screen: ForgetPassword,
  },
  BankAccounts: {
    screen: BankAccounts,
  },
  BitcoinAddresses: {
    screen: BitcoinAddresses,
  },
  WithdrawalAmountEntry: {
    screen: WithdrawalAmountEntry,
  },
  SendMoney: {
    screen: SendMoney,
  },
  SendTo: {
    screen: SendTo,
  },
  QRcodeScanner: {
    screen: QRcodeScanner,
  },
  AccountCurrencies: {
    screen: AccountCurrencies,
  },
  UploadImage: {
    screen: UploadImage,
  },
  SettingsPersonalDetails: {
    screen: SettingsPersonalDetails,
  },
  SettingsMobileNumbers: {
    screen: SettingsMobileNumbers,
  },
  AddMobileNumber: {
    screen: AddMobileNumber,
  },
  VerifyMobileNumber: {
    screen: VerifyMobileNumber,
  },
  SettingsEmailAddresses: {
    screen: SettingsEmailAddresses,
  },
  AddEmailAddress: {
    screen: AddEmailAddress,
  },
  SettingsGetVerified: {
    screen: SettingsGetVerified,
  },
  Document: {
    screen: Document,
  },
  DocumentUpload: {
    screen: DocumentUpload,
  },
  SettingsAddress: {
    screen: SettingsAddress,
  },
  SettingsBankAccounts: {
    screen: SettingsBankAccounts,
  },
  SettingsBitcoinAddresses: {
    screen: SettingsBitcoinAddresses,
  },
  AddBankAccount: {
    screen: AddBankAccount,
  },
  EditBankAccount: {
    screen: EditBankAccount,
  },
  AddBitcoinAddress: {
    screen: AddBitcoinAddress,
  },
  EditBitcoinAddress: {
    screen: EditBitcoinAddress,
  },
  SettingsCards: {
    screen: SettingsCards,
  },
  SettingsSecurity: {
    screen: SettingsSecurity,
  },
  ChangePassword: {
    screen: ChangePassword,
  },
  TwoFactor: {
    screen: TwoFactor,
  },
  SettingsNotifications: {
    screen: SettingsNotifications,
  },
  EmailNotifications: {
    screen: EmailNotifications,
  },
  MobileNotifications: {
    screen: MobileNotifications,
  },
}


export default StackNavigator(Stack, {
    headerMode: 'none',
})
