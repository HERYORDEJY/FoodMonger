import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../components/NavigationBar';
import { ScreenBG, SecondaryColor } from '../../modules/colors';
import SettingsLinkItem from '../../components/SettingsLinkItem';
import { useNavigation } from '@react-navigation/native';

export interface SettingsProps {}

export interface SettingsState {}

// TODO Favorite link
// TODO Notification toggle
// TODO Rate Us link
// TODO Log out link

export default function Settings(props: SettingsProps) {
  const navigation = useNavigation();

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={ScreenBG} />
      <NavigationBar
        leftComponent={<RN.Text style={styles.screenTitle}>Settings</RN.Text>}
      />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <SettingsLinkItem
          title={'Account Settings'}
          iconName={'user'}
          onPress={() => navigation.navigate('AccountSettings')}
        />
        <SettingsLinkItem title={'Favorite'} iconName={'heart'} />
        <SettingsLinkItem
          title={'Order History'}
          iconName={'clock'}
          onPress={() => navigation.navigate('OrderHistory')}
        />
        <SettingsLinkItem title={'Notification'} iconName={'bell'} />
        <SettingsLinkItem
          title={'About the App'}
          iconName={'help-circle'}
          onPress={() => navigation.navigate('AboutApp')}
        />
        <SettingsLinkItem
          title={'FAQ'}
          iconName={'info'}
          onPress={() => navigation.navigate('FAQ')}
        />
        <SettingsLinkItem title={'Rate Us'} iconName={'star'} />
        <SettingsLinkItem title={'Log Out'} iconName={'power'} />
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: ScreenBG,
    paddingHorizontal: RFValue(20),
    paddingTop: RFValue(0),
    flex: 1,
  },
  content: {},
  contentContainerStyle: { paddingBottom: RFValue(20) },
  screenTitle: {
    fontFamily: 'Avenir-DemiBold',
    fontSize: RFValue(20),
    color: SecondaryColor,
  },
});
