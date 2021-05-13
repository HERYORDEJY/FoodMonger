import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, ScreenBG, SecondaryColor } from '../../modules/colors';
import NavigationBar from '../../components/NavigationBar';
import OrderSummaryPayment from '../../components/OrderSummaryPayment';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import MyCartItem from '../../components/MyCartItem';

export interface CheckOutProps {}

export interface CheckOutState {}

export default function CheckOut(props: CheckOutProps) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={ScreenBG} />
      <NavigationBar title={'Check Out'} />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <RN.View style={styles.deliveryAddressWrapper}>
          <RN.Text style={styles.deliveryAddressTitle}>
            Delivery Address
          </RN.Text>
          <RN.View style={styles.enterAddressWrapper}>
            <RN.View style={styles.plusWrapper}>
              <NB.Icon style={styles.plusIcon} name={'plus'} type={'Feather'} />
            </RN.View>
            <RN.Text style={styles.enterAddressTitle}>
              Enter your address
            </RN.Text>
          </RN.View>
        </RN.View>

        <OrderSummaryPayment />

        <RN.View style={styles.orderList}>
          <RN.Text style={styles.deliveryAddressTitle}>Order Summary</RN.Text>
          <MyCartItem
            title={'Mixed with Chicken and Coke'}
            price={'1234'}
            addition={3}
            imageSource={require('../../assets/images/pounded-yam.png')}
            summary={true}
          />
          <MyCartItem
            title={'Mixed with Chicken and Coke'}
            price={'1234'}
            addition={3}
            imageSource={require('../../assets/images/pounded-yam.png')}
            summary={true}
          />
        </RN.View>
      </NB.Content>
      <ButtonPrimaryBig
        title={'Confirm Order'}
        containerStyles={{ marginVertical: RFValue(20) }}
      />
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { backgroundColor: ScreenBG, paddingHorizontal: RFValue(20) },
  content: {},
  contentContainerStyle: {},
  deliveryAddressWrapper: { marginVertical: RFValue(10) },
  deliveryAddressTitle: {
    fontSize: RFValue(16),
    color: '#999999',
    fontFamily: 'Avenir-Medium',
    marginBottom: RFValue(10),
  },
  enterAddressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: RFValue(76 - 8),
    borderRadius: RFValue(10),
    backgroundColor: '#FFFFFF',
    elevation: RFValue(2),
    margin: RFValue(1),
    marginBottom: RFValue(20),
    paddingHorizontal: RFValue(10),
  },
  plusWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: RFValue(37.47 - 8),
    width: RFValue(37.47 - 8),
    borderRadius: RFValue(5),
    backgroundColor: '#FF3B30' + 14,
    borderWidth: RFValue(0.5),
    borderColor: PrimaryColor,
    borderStyle: 'dashed',
  },
  plusIcon: { fontSize: RFValue(16), color: PrimaryColor },
  enterAddressTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: RFValue(18),
    color: SecondaryColor,
  },
});
