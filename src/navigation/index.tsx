import * as React from 'react';

import { Asset } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigation } from './TabNavigation';
import { Provider } from 'react-native-paper';
import { StackNavigation } from './StackNavigation';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Provider>
        <StackNavigation />
      </Provider>
    </NavigationContainer>
  );
}
