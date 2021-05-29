import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import OtpInputs from 'react-native-otp-inputs';

import NavigationBar from '../../components/NavigationBar';
import {
  GrayColor,
  PrimaryColor,
  ScreenBG,
  SecondaryColor,
} from '../../modules/colors';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import OTPInputed from '../../components/OTPInput';

import OTPInputView from '@twotalltotems/react-native-otp-input';
//
import { OTP } from 'react-native-otp-form';
import OTPTextInput from 'react-native-otp-textinput';
import PinInput from 'react-native-pin-entry';
import OTPInput from 'react-native-otp-tgp';

export interface OTPVerificationProps {}

export interface OTPVerificationState {}

export default function OTPVerification(props: OTPVerificationProps) {
  const [otp, setOtp] = React.useState(null);

  const otpInput = React.useRef(null);

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
          <OTPInputed getOtp={(otp) => getOtp(otp)} />
          {/* <OTP
            codeCount={4}
            containerStyle={{ marginTop: 50 }}
            otpStyles={styles.roundedTextInput}
          /> */}
          {/* <OTPTextInput
            ref={otpInput}
            textInputStyle={{ borderWidth: 1, backgroundColor: 'red' }}
            tintColor={PrimaryColor}
            offTintColor={GrayColor}
            containerStyle={styles.textInputContainer}
            textInputStyle={styles.roundedTextInput}
          /> */}
          {/* <PinInput onInputChange={(pin) => console.log(pin)} /> */}
          {/* <OTPInput
            // value={otp}
            // onChange={getOtp}
            tintColor={PrimaryColor}
            offTintColor='#BBBCBE'
            otpLength={4}
            cellStyle={{ flex: 1 }}
          /> */}
        </RN.View>
        <RN.View style={styles.timerWrapper}>
          <RN.Text style={styles.timerText}>Resend: 00:30</RN.Text>
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
  otpWrapper: { marginHorizontal: RFValue(50), marginVertical: RFValue(0) },
  timerWrapper: { alignItems: 'center' },
  timerText: { fontSize: RFValue(14), color: '#444444' },
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
  textInputContainer: {
    marginBottom: RFValue(20),
  },
  roundedTextInput: {
    textAlign: 'center',
    height: RFValue(42),
    width: RFValue(42),
    borderRadius: RFValue(10),
    fontFamily: 'BROmega-SemiBold',
    fontSize: RFValue(24),
    color: SecondaryColor,
    borderWidth: RFValue(1),
  },

  // OTP styles ends here
});
