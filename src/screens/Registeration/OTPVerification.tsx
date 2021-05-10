import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';

import NavigationBar from '../../components/NavigationBar';
import { SecondaryColor } from '../../modules/colors';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';

export interface OTPVerificationProps {}

export interface OTPVerificationState {}

export default function OTPVerification(props: OTPVerificationProps) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        transcluscent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar title={'OTP Verification'} />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <RN.View style={styles.headerWrapper}>
          <RN.Text style={styles.headerText}>
            We have sent an OTP number to your email address
            jamesbrown@gmail.com
          </RN.Text>
        </RN.View>
      </NB.Content>
      <ButtonPrimaryBig
        title={'Continue'}
        containerStyles={{ margin: RFValue(20) }}
      />
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {},
  content: {},
  contentContainerStyle: {},
  headerWrapper: { paddingHorizontal: RFValue(50) },
  headerText: {
    textAlign: 'center',
    fontSize: RFValue(14),
    color: SecondaryColor,
    lineHeight: RFValue(20),
  },
});
