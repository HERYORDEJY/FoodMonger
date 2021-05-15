import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import OtpInputs from 'react-native-otp-inputs';

import NavigationBar from '../../components/NavigationBar';
import { ScreenBG, SecondaryColor } from '../../modules/colors';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import OTPInput from '../../components/OTPInput';

export interface OTPVerificationProps {}

export interface OTPVerificationState {}

export default function OTPVerification(props: OTPVerificationProps) {
  const [otp, setOtp] = React.useState(null);

  const getOtp = (otp) => {
    console.log(otp);
    setOtp(() => otp);
  };

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={ScreenBG} />
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

        <RN.View style={styles.otpWrapper}>
          {/* <OtpInputs
            handleChange={(code) => console.log(code)}
            numberOfInputs={4}
          /> */}
          <OTPInput getOtp={(otp) => getOtp(otp)} />
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
  container: { backgroundColor: ScreenBG },
  content: {},
  contentContainerStyle: {},
  headerWrapper: {
    paddingHorizontal: RFValue(50),
    marginTop: RFValue(30),
  },
  headerText: {
    textAlign: 'center',
    fontSize: RFValue(14),
    color: SecondaryColor,
    lineHeight: RFValue(20),
  },

  // OTP styles starts here

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  // OTP styles ends here
});
