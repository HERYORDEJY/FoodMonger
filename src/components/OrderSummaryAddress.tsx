import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';
import { PrimaryColor, SecondaryColor } from '../modules/colors';

export interface OrderSummaryAddressProps {}

export interface OrderSummaryAddressState {}

export default class OrderSummaryAddress extends React.Component<
  OrderSummaryAddressProps,
  OrderSummaryAddressState
> {
  constructor(props: OrderSummaryAddressProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <RN.View style={[styles.container]}>
        <RN.Text style={styles.header}>Address</RN.Text>
        <RN.View style={styles.wrapper}>
          <RN.View style={styles.contentWrapper}>
            <NB.Icon style={styles.mapIcon} name={'map-pin'} type={'Feather'} />
            <RN.View style={styles.addressWrapper}>
              <RN.Text style={styles.addressType}>Office Address</RN.Text>
              <RN.Text style={styles.fullAddress}>
                No 15A Unilag Estate Magodo
              </RN.Text>
              <RN.Text style={styles.city}>Lagos</RN.Text>
              <RN.Text style={styles.country}>Nigeria</RN.Text>
              <RN.Text style={styles.phoneNumber}>+2340806782902</RN.Text>
            </RN.View>
            <NB.Icon
              style={styles.arrowIcon}
              name={'chevron-right'}
              type={'Feather'}
            />
          </RN.View>
        </RN.View>
      </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: { marginBottom: RFValue(30) },
  header: {
    fontSize: RFValue(16),
    color: '#999999',
    fontFamily: 'Avenir-Medium',
    marginBottom: RFValue(10),
  },
  wrapper: {
    margin: RFValue(1),
    borderRadius: RFValue(10),
    height: RFValue(137 - 8),
    elevation: RFValue(2),
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: RFValue(10),
  },
  mapIcon: { color: PrimaryColor },
  addressWrapper: {
    flex: 1,
    marginHorizontal: RFValue(10),
  },
  addressType: {
    fontSize: RFValue(14),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
    marginBottom: RFValue(5),
  },
  fullAddress: {
    fontSize: RFValue(12),
    color: SecondaryColor,
    fontFamily: 'Avenir-Regular',
    marginBottom: RFValue(5),
  },
  city: {
    fontSize: RFValue(12),
    color: SecondaryColor,
    fontFamily: 'Avenir-Regular',
    marginBottom: RFValue(5),
  },
  country: {
    fontSize: RFValue(12),
    color: SecondaryColor,
    fontFamily: 'Avenir-Regular',
    marginBottom: RFValue(5),
  },
  phoneNumber: {
    fontSize: RFValue(12),
    color: SecondaryColor,
    fontFamily: 'Avenir-Regular',
    marginBottom: RFValue(5),
  },
  arrowIcon: {},
});
