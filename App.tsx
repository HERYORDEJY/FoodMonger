import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import * as Font from 'expo-font';

import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { Provider } from 'react-native-paper';

import Login from './src/screens/Registeration/Login';
import CreateAccount from './src/screens/Registeration/CreateAccount';
import OTPVerification from './src/screens/Registeration/OTPVerification';
import RecoverPassword from './src/screens/Registeration/RecoverPassword';
import ResetPassword from './src/screens/Registeration/ResetPassword';
import Settings from './src/screens/Settings/Settings';
import AccountSettings from './src/screens/Settings/AccountSettings';
import OrderHistory from './src/screens/Settings/OrderHistory';
import FAQ from './src/screens/Settings/FAQ';
import AboutApp from './src/screens/Settings/AboutApp';
import Home from './src/screens/Home/Home';
import FoodInfo from './src/screens/Home/FoodInfo';
import FoodInfo2 from './src/screens/Home/FoodInfo2';
import Filter from './src/components/Filter';
import MyCart from './src/screens/Cart/MyCart';
import OrderSummary from './src/screens/Cart/OrderSummary';
import CheckOut from './src/screens/Cart/CheckOut';
import OrderSuccesful from './src/screens/Cart/OrderSuccesful';
import AccordionView from './src/components/Accordion';
import Search from './src/screens/Home/Search';
import Menu from './src/screens/Home/Menu';
import AppIntroSliders from './src/screens/Onboarding/AppIntroSlider';
import AppNavigation from './src/navigation';

let customFonts = {
  'Avenir-Regular': require('./src/assets/fonts/Avenir-Next-Font.ttf'),
  'Avenir-DemiBold': require('./src/assets/fonts/Avenir-Next-W04-Demi.ttf'),
  'Avenir-Medium': require('./src/assets/fonts/Avenir-Next-W10-Medium.ttf'),
  'Avenir-Bold': require('./src/assets/fonts/Avenir-Next-W06-Bold.ttf'),
  'BROmega-Regular': require('./src/assets/fonts/BR-Omega-Regular.ttf'),
  'BROmega-Medium': require('./src/assets/fonts/BR-Omega-Medium.ttf'),
  'BROmega-SemiBold': require('./src/assets/fonts/BR-Omega-SemiBold.ttf'),
  'SFPro-SemiBold': require('./src/assets/fonts/SF-Pro-Display-Semibold.otf'),
  'SFPro-Bold': require('./src/assets/fonts/SF-Pro-Display-Bold.otf'),
  'SFPro-Regular': require('./src/assets/fonts/SF-Pro-Display-Regular.otf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
    customTextProps: {
      style: {
        fontFamily: 'Avenir-Regular',
      },
    },
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    await setCustomText(this.state.customTextProps);
    await setCustomTextInput(this.state.customTextProps);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    // this.loadAssets();
  }

  render() {
    if (this.state.fontsLoaded) {
      return <AppNavigation />;
    } else {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontFamily: 'Avenir-Regular' }} selectable={true}>
            Font still loading
          </Text>
        </View>
      );
    }
  }
}

/* Welcome Back, */
