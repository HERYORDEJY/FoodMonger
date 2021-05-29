import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings/Settings';
import AccountSettings from '../screens/Settings/AccountSettings';
import OrderHistory from '../screens/Settings/OrderHistory';
import AboutApp from '../screens/Settings/AboutApp';
import FAQ from '../screens/Settings/FAQ';
import { BottomTabNavigation } from './TabNavigation';
import CheckOut from '../screens/Cart/CheckOut';
import OrderSuccesful from '../screens/Cart/OrderSuccesful';

const StackNavigator = createStackNavigator();

export function StackNavigation() {
  return (
    <StackNavigator.Navigator initialRouteName={'MyCart'} headerMode={null}>
      <StackNavigator.Screen name={'Home'} component={BottomTabNavigation} />

      {/*  Cart Stacks*/}
      <StackNavigator.Screen name={'CheckOut'} component={CheckOut} />
      <StackNavigator.Screen
        name={'OrderSuccessful'}
        component={OrderSuccesful}
      />

      {/*  Settings Stack*/}
      <StackNavigator.Screen
        name={'AccountSettings'}
        component={AccountSettings}
      />
      <StackNavigator.Screen name={'OrderHistory'} component={OrderHistory} />
      <StackNavigator.Screen name={'AboutApp'} component={AboutApp} />
      <StackNavigator.Screen name={'FAQ'} component={FAQ} />
    </StackNavigator.Navigator>
  );
}
