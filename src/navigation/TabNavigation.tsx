import * as React from 'react';
import * as RN from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home/Home';
import MyCart from '../screens/Cart/MyCart';
import Menu from '../screens/Home/Menu';
import Settings from '../screens/Settings/Settings';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  ActiveTabColor,
  InactiveTabColor,
  PrimaryColor,
} from '../modules/colors';
import {
  CartTabIcon,
  HomeTabIcon,
  MenuTabIcon,
  SettingsTabIcon,
} from '../svg/TabBarIcon';

const BottomTab = createBottomTabNavigator();

function tabIcons(label, isFocused) {
  if (label == 'Home') {
    return <HomeTabIcon fill={isFocused ? ActiveTabColor : InactiveTabColor} />;
  }
  if (label == 'Menu') {
    return <MenuTabIcon fill={isFocused ? ActiveTabColor : InactiveTabColor} />;
  }
  if (label == 'Cart') {
    return <CartTabIcon fill={isFocused ? ActiveTabColor : InactiveTabColor} />;
  }
  if (label == 'Settings') {
    return (
      <SettingsTabIcon fill={isFocused ? ActiveTabColor : InactiveTabColor} />
    );
  }
}

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <RN.View style={styles.barStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <RN.TouchableOpacity
            key={label}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.labelWrapper,
              {
                borderTopWidth: isFocused ? RFValue(3) : 0,
                borderTopColor: PrimaryColor,
              },
            ]}
          >
            {tabIcons(label, isFocused)}
            <RN.Text
              style={[
                styles.label,
                { color: isFocused ? ActiveTabColor : InactiveTabColor },
              ]}
            >
              {label}
            </RN.Text>
          </RN.TouchableOpacity>
        );
      })}
    </RN.View>
  );
}

// ...

export function BottomTabNavigation() {
  return (
    <BottomTab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <BottomTab.Screen name={'Home'} component={Home} />
      <BottomTab.Screen name={'Menu'} component={Menu} />
      <BottomTab.Screen name={'Cart'} component={MyCart} />
      <BottomTab.Screen name={'Settings'} component={Settings} />
    </BottomTab.Navigator>
  );
}

const styles = RN.StyleSheet.create({
  barStyle: {
    backgroundColor: '#FFFFFF',
    elevation: RFValue(3),
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(10),
  },
  labelWrapper: {
    alignItems: 'center',
    flex: 1,
    borderTopWidth: RFValue(3),
    paddingVertical: RFValue(10),
  },
  label: {
    fontFamily: 'Avenir-Regular',
    fontSize: RFValue(12),
    color: '#CCCCCC',
    paddingTop: RFValue(5),
  },
});
