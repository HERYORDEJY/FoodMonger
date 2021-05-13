import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';

import NavigationBar from '../../components/NavigationBar';
import { AppIconBig } from '../../svg/AppIcon';
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from '../../svg/SocialIcons';
import { SecondaryColor, PrimaryColor } from '../../modules/colors';

export interface AboutAppProps {}

export interface AboutAppState {}

export default function AboutApp(props: AboutAppProps) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <NavigationBar title={'About App'} />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <RN.View style={styles.appIconWrapper}>
          <AppIconBig />
          <RN.Text style={styles.version}>Version 1.0.0</RN.Text>
        </RN.View>

        <RN.Text style={styles.suggestion}>
          Do you have any question or suggestions?
        </RN.Text>
        <RN.View style={styles.contactWrapper}>
          <RN.Text style={styles.contactUs}>Contact Us</RN.Text>
          <RN.Text style={styles.email}>support@foodmonger.com</RN.Text>
        </RN.View>

        <RN.Text style={styles.socialMedia}>Social Media</RN.Text>
        <RN.View style={styles.mediaWrapper}>
          <RN.Pressable style={styles.iconWrapper}>
            <LinkedInIcon style={styles.icon} />
          </RN.Pressable>
          <RN.Pressable style={styles.iconWrapper}>
            <InstagramIcon style={styles.icon} />
          </RN.Pressable>
          <RN.Pressable style={styles.iconWrapper}>
            <FacebookIcon style={styles.icon} />
          </RN.Pressable>
          <RN.Pressable style={styles.iconWrapper}>
            <TwitterIcon style={styles.icon} />
          </RN.Pressable>
        </RN.View>
        <RN.Text style={styles.privacyPolicy}>Privacy Policy</RN.Text>
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { paddingHorizontal: RFValue(20) },
  content: {},
  contentContainerStyle: { paddingHorizontal: RFValue(60) },
  appIconWrapper: { marginTop: RFValue(30), alignItems: 'center' },
  version: {
    marginVertical: RFValue(20),
    marginTop: RFValue(5),
    fontFamily: 'Avenir-Regular',
    fontSize: RFValue(12),
    color: SecondaryColor,
    textAlign: 'center',
  },
  suggestion: {
    marginVertical: RFValue(20),
    fontFamily: 'Avenir-DemiBold',
    fontSize: RFValue(14),
    color: SecondaryColor,
    textAlign: 'center',
  },
  contactWrapper: { marginVertical: RFValue(20) },
  contactUs: {
    fontFamily: 'Avenir-DemiBold',
    fontSize: RFValue(14),
    color: SecondaryColor,
    textAlign: 'center',
  },
  email: {
    fontFamily: 'Avenir-DemiBold',
    fontSize: RFValue(14),
    color: SecondaryColor,
    textAlign: 'center',
  },
  socialMedia: {
    marginVertical: RFValue(20),
    fontFamily: 'Avenir-DemiBold',
    fontSize: RFValue(14),
    color: SecondaryColor,
    textAlign: 'center',
  },
  privacyPolicy: {
    marginVertical: RFValue(20),
    fontFamily: 'Avenir-DemiBold',
    fontSize: RFValue(14),
    color: PrimaryColor,
    textAlign: 'center',
  },
  mediaWrapper: {
    marginBottom: RFValue(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: RFValue(30),
  },
  iconWrapper: { marginHorizontal: RFValue(20) },
  icon: {},
});
