import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Content, Item, Input } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, SecondaryColor } from '../modules/colors';

export default class OTPInputs extends React.Component {
  state = { otp: [], value: null };
  otpTextInput = [];

  componentDidMount() {
    this.otpTextInput[0]._root.focus();
  }

  renderInputs() {
    const inputs = Array(4).fill(0);
    const txt = inputs.map((i, j) => (
      <Col key={j} style={styles.txtMargin}>
        <Item regular style={[styles.item, {}]} bordered={false}>
          <Input
            maxLength={1}
            style={[
              styles.inputRadius,
              {
                borderRadius: RFValue(10),
                backgroundColor:
                  this.state.value?.length > 0 ? PrimaryColor + 13 : '#FFFFFF',
                borderColor:
                  this.state.value?.length > 0 ? PrimaryColor : '#CCCCCC',
              },
            ]}
            keyboardType='numeric'
            onChangeText={(v) => this.focusNext(j, v)}
            onKeyPress={(e) => this.focusPrevious(e.nativeEvent.key, j)}
            ref={(ref) => (this.otpTextInput[j] = ref)}
          />
        </Item>
      </Col>
    ));
    return txt;
  }

  focusPrevious(key, index) {
    if (key === 'Backspace' && index !== 0)
      this.otpTextInput[index - 1]._root.focus();
  }

  focusNext(index, value) {
    if (index < this.otpTextInput.length - 1 && value) {
      this.otpTextInput[index + 1]._root.focus();
    }
    if (index === this.otpTextInput.length - 1) {
      this.otpTextInput[index]._root.blur();
    }
    const otp = this.state.otp;
    otp[index] = value;
    this.setState({ otp, value });
    this.props.getOtp(otp.join(''));
  }

  render() {
    return (
      <Content padder>
        <Grid style={styles.gridPad}>{this.renderInputs()}</Grid>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  gridPad: {
    padding: RFValue(30),
    borderRadius: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    borderWidth: RFValue(0),
    height: RFValue(42),
    width: RFValue(42),
    borderRadius: RFValue(10),
    borderColor: 'transparent',
  },
  txtMargin: {
    margin: RFValue(10),
    height: RFValue(42),
    width: RFValue(42),
    borderRadius: RFValue(10),
  },
  inputRadius: {
    textAlign: 'center',
    height: RFValue(42),
    width: RFValue(42),
    borderRadius: RFValue(10),
    fontFamily: 'BROmega-SemiBold',
    fontSize: RFValue(24),
    color: SecondaryColor,
    borderWidth: RFValue(1),
  },
});
