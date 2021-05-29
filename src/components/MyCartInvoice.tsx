import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { ScreenBG, SecondaryColor } from '../modules/colors';
import ButtonPrimaryBig from './ButtonPrimaryBig';

export interface MyCartInvoiceProps {
  subtotal: string | number;
  discount: string | number;
}

export interface MyCartInvoiceState {}

export default class MyCartInvoice extends React.Component<
  MyCartInvoiceProps,
  MyCartInvoiceState
> {
  constructor(props: MyCartInvoiceProps) {
    super(props);

    this.state = {};
  }

  public render() {
    //calculate total price
    const totalPrice = +this.props.subtotal - +this.props.discount;

    return (
      <RN.View style={[styles.container]}>
        <RN.View style={styles.itemWrapper}>
          <RN.Text style={styles.itemKey}>Subtotal </RN.Text>
          <RN.Text style={styles.itemValue}>₦{this.props.subtotal}</RN.Text>
        </RN.View>

        <RN.View style={styles.itemWrapper}>
          <RN.Text style={styles.itemKey}>Discount </RN.Text>
          <RN.Text style={styles.itemValue}>₦{this.props.discount}</RN.Text>
        </RN.View>

        <RN.View
          style={[styles.itemWrapper, { borderBottomWidth: RFValue(0) }]}
        >
          <RN.Text style={[styles.itemKey, { fontFamily: 'Avenir-Bold' }]}>
            Total
          </RN.Text>
          <RN.Text style={[styles.itemValue, { fontFamily: 'Avenir-Bold' }]}>
            ₦{totalPrice}
          </RN.Text>
        </RN.View>
      </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    paddingVertical: RFValue(20),
    paddingBottom: RFValue(0),
    paddingHorizontal: RFValue(10),
    borderRadius: RFValue(10),
    elevation: RFValue(2),
    margin: RFValue(1),
    backgroundColor: '#FFFFFF',
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: RFValue(15),
    marginBottom: RFValue(15),
    borderBottomWidth: RFValue(1),
    borderBottomColor: '#F2F2F2',
  },
  itemKey: {
    fontSize: RFValue(16),
    color: SecondaryColor,
    fontFamily: 'Avenir-Medium',
  },
  itemValue: {
    fontSize: RFValue(16),
    color: SecondaryColor,
    fontFamily: 'Avenir-Medium',
  },
});
