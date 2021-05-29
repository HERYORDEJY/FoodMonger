import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';

import { SecondaryColor } from '../modules/colors';
import { CircleComboIcon } from '../svg/EllipseIcon';
import { CashIcon, CreditCardIcon } from '../svg/PaymentsIcon';

export interface OrderSummaryPaymentProps {}

export interface OrderSummaryPaymentState {
  type: 'cash' | 'card';
}

export default class OrderSummaryPayment extends React.Component<
  OrderSummaryPaymentProps,
  OrderSummaryPaymentState
> {
  constructor(props: OrderSummaryPaymentProps) {
    super(props);

    this.state = { type: 'cash' };
  }

  onSelectCard = (type: 'cash' | 'card') =>
    this.setState(() => ({ ...this.state, type }));

  cardNumberFocus = () =>
    this.setState((prev) => ({ ...this.state, type: 'card' }));

  public render() {
    return (
      <RN.View style={[styles.container]}>
        <RN.Text style={styles.header}>Payment</RN.Text>
        <RN.Pressable
          style={styles.cashWrapper}
          onPress={() => this.onSelectCard('cash')}
        >
          <CashIcon />
          <RN.Text style={styles.cash}>Cash</RN.Text>
          {this.state.type === 'cash' && <CircleComboIcon />}
        </RN.Pressable>
        <RN.Pressable
          style={styles.cardWrapper}
          onPress={() => this.onSelectCard('card')}
        >
          <RN.View style={styles.cardHeaderWrapper}>
            <CreditCardIcon />
            <RN.Text style={styles.card}>Card</RN.Text>
            {this.state.type === 'card' && <CircleComboIcon />}
          </RN.View>
          <RN.View style={styles.wrapper}>
            <RN.View style={styles.inputWrapper}>
              <RN.TextInput
                placeholder={'Card Number'}
                placeholderTextColor={'#CCCCCC'}
                style={[styles.textInput]}
                autoFocus={this.state.type === 'card'}
                // onFocus={this.cardNumberFocus}
                onChange={this.cardNumberFocus}
              />
              <RN.View style={styles.textInputWrapper}>
                <RN.TextInput
                  placeholder={'Expiry Date'}
                  placeholderTextColor={'#CCCCCC'}
                  style={[
                    styles.textInput,
                    { flex: 1, marginRight: RFValue(10) },
                  ]}
                />
                <RN.TextInput
                  placeholder={'CVV'}
                  placeholderTextColor={'#CCCCCC'}
                  style={[
                    styles.textInput,
                    { flex: 1, marginLeft: RFValue(10) },
                  ]}
                />
              </RN.View>
            </RN.View>
          </RN.View>
        </RN.Pressable>
      </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    // backgroundColor: '#FFFFFF'
    marginBottom: RFValue(30),
  },
  header: {
    fontSize: RFValue(16),
    color: '#999999',
    fontFamily: 'Avenir-Medium',
    marginBottom: RFValue(10),
  },
  cashWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: RFValue(64 - 8),
    borderRadius: RFValue(10),
    backgroundColor: '#FFFFFF',
    elevation: RFValue(2),
    margin: RFValue(1),
    marginBottom: RFValue(20),
    paddingHorizontal: RFValue(10),
  },
  cash: {
    fontSize: RFValue(16),
    color: SecondaryColor,
    fontFamily: 'Avenir-Medium',
    flex: 1,
    marginHorizontal: RFValue(10),
  },
  cardWrapper: {
    // alignItems: 'center',
    // justifyContent: 'center',
    height: RFValue(241 - 8),
    borderRadius: RFValue(10),
    backgroundColor: '#FFFFFF',
    elevation: RFValue(2),
    margin: RFValue(1),
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(20),
  },
  cardHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    fontSize: RFValue(16),
    color: SecondaryColor,
    fontFamily: 'Avenir-Medium',
    flex: 1,
    marginHorizontal: RFValue(10),
  },
  inputWrapper: {
    justifyContent: 'center',
    // alignItems: 'center', m
    marginVertical: RFValue(20),
  },
  textInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flexWrap: 'wrap',
    // flex: 1,
    // flexShrink: 1,
  },
  textInput: {
    height: RFValue(56 - 8),
    borderRadius: RFValue(10),
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: RFValue(1),
    marginVertical: RFValue(10),
    paddingHorizontal: RFValue(10),
    fontFamily: 'Avenir-Regular',
    fontSize: RFValue(14),
    color: SecondaryColor,
    // flex: 1,
  },
});
