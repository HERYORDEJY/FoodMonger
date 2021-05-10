import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../components/NavigationBar';
import { SecondaryColor } from '../../modules/colors';
import SettingsLinkItem from '../../components/SettingsLinkItem';

export interface SettingsProps {}

export interface SettingsState {}

export default function Settings(props: SettingsProps) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar
        leftComponent={<RN.Text style={styles.screenTitle}>Settings</RN.Text>}
      />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <SettingsLinkItem title={'Account Settings'} iconName={'user'} />
        <SettingsLinkItem title={'Favorite'} iconName={'heart'} />
        <SettingsLinkItem title={'Order History'} iconName={'clock'} />
        <SettingsLinkItem title={'Notification'} iconName={'bell'} />
        <SettingsLinkItem title={'About the App'} iconName={'help-circle'} />
        <SettingsLinkItem title={'FAQ'} iconName={'info'} />
        <SettingsLinkItem title={'Rate Us'} iconName={'star'} />
        <SettingsLinkItem title={'Log Out'} iconName={'power'} />
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(20),
    flex: 1,
  },
  content: {},
  contentContainerStyle: { flex: 1 },
  screenTitle: {
    fontFamily: 'Avenir-DemiBold',
    fontSize: RFValue(20),
    color: SecondaryColor,
  },
});
