import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { CartIcon } from '../../svg/CartIcon';
import { PrimaryColor, SecondaryColor } from '../../modules/colors';
import MyCartItem from '../../components/MyCartItem';
import PromoCodeBar from '../../components/PromoCodeBar';
import MyCartinvoice from '../../components/MyCartInvoice';

export interface MyCartProps {}

export interface MyCartState {}

export default function MyCart(props: MyCartProps) {
  const renderEmptyCart = () => (
    <RN.View style={styles.emptyCartWrapper}>
      <RN.View style={styles.cartIconWrapper}>
        <CartIcon />
      </RN.View>
      <RN.View style={styles.contentWrapper}>
        <RN.Text style={styles.contentTitle}>Your Cart is Empty</RN.Text>
        <RN.Text style={styles.contentSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi arcu
          ut aliquet et cursus.
        </RN.Text>
      </RN.View>
    </RN.View>
  );

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
      <RN.View style={styles.headerWrapper}>
        <RN.Text style={styles.headerTitle}>My Cart</RN.Text>
      </RN.View>
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {/* {renderEmptyCart()} */}
        <MyCartItem
          title={'Mixed with Chicken and Coke'}
          price={'2000'}
          imageSource={require('../../assets/images/burger.png')}
          addition={1}
        />
        <MyCartItem
          title={'Mixed with Chicken and Coke'}
          price={'2000'}
          imageSource={require('../../assets/images/burger.png')}
          addition={3}
        />
        <MyCartItem
          title={'Mixed with Chicken and Coke'}
          price={'2000'}
          imageSource={require('../../assets/images/burger.png')}
          addition={3}
        />
        <MyCartItem
          title={'Mixed with Chicken and Coke'}
          price={'2000'}
          imageSource={require('../../assets/images/burger.png')}
          addition={3}
        />
        <MyCartItem
          title={'Mixed with Chicken and Coke'}
          price={'2000'}
          imageSource={require('../../assets/images/burger.png')}
          addition={3}
        />
        <PromoCodeBar />
      </NB.Content>
      <MyCartinvoice />
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {},
  content: { flex: 1, paddingHorizontal: RFValue(19) },
  contentContainerStyle: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  emptyCartWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headerWrapper: { padding: RFValue(20), alignItems: 'center' },
  headerTitle: {
    fontSize: RFValue(20),
    fontFamily: 'Avenir-DemiBold',
    color: SecondaryColor,
  },
  cartIconWrapper: {
    height: RFValue(255 - 8),
    width: RFValue(255 - 8),
    borderRadius: 255,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PrimaryColor + '18',
  },
  contentWrapper: {
    margin: RFValue(40),
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: RFValue(18),
    fontFamily: 'Avenir-DemiBold',
    color: '#444444',
    marginBottom: RFValue(20),
  },
  contentSubtitle: {
    fontSize: RFValue(14),
    fontFamily: 'Avenir-Regular',
    color: '#666666',
    textAlign: 'center',
    lineHeight: RFValue(20),
  },
});
