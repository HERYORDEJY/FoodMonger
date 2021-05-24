import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../../screens/Settings/Settings';
import AccountSettings from '../../screens/Settings/AccountSettings';
import OrderHistory from '../../screens/Settings/OrderHistory';
import AboutApp from '../../screens/Settings/AboutApp';
import FAQ from '../../screens/Settings/FAQ';

const StackNavigator = createStackNavigator();

export function SettingsStackNavigation() {
  return (
    <StackNavigator.Navigator initialRouteName={'Settings'} headerMode={null}>
      <StackNavigator.Screen name={'Settings'} component={Settings} />
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
