import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, ScreenBG, SecondaryColor } from '../../modules/colors';
import NavigationBar from '../../components/NavigationBar';
import OrderSummaryPayment from '../../components/OrderSummaryPayment';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import MyCartItem from '../../components/MyCartItem';
import { useNavigation } from '@react-navigation/native';
import { cartItemData } from '../../api/datas';
import ButtonPrimarySmall from './../../components/ButtonPrimarySmall';

export interface CheckOutProps {}

export interface CheckOutState {}

interface CartItemProps {
  id: string;
  title: string;
  price: string;
  discountPercent: string;
  quantity: string;
  addition: string;
  imageSource: any;
}

export default function CheckOut(props: CheckOutProps) {
  const navigation = useNavigation();

  const subTotalPrice = () => {};

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={ScreenBG} />
      <NavigationBar
        title={'Check Out'}
        leftOnPress={() => navigation.goBack()}
      />
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

        <RN.View style={styles.inputAddressWrapper}>
          <RN.TextInput
            placeholder={'Enter your address here'}
            style={styles.addressInput}
          />
          <RN.View style={[styles.flexRow]}>
            <ButtonPrimaryBig
              containerStyles={styles.cancelButton}
              titleStyles={styles.cancelText}
              title={'Cancel'}
            />
            <ButtonPrimaryBig
              containerStyles={styles.saveButton}
              titleStyles={styles.saveText}
              title={'Save'}
            />
          </RN.View>
        </RN.View>

        <OrderSummaryPayment />

        <RN.View style={styles.orderList}>
          <RN.Text style={styles.deliveryAddressTitle}>Order Summary</RN.Text>
          {cartItemData.map((item: CartItemProps, index) => (
            <MyCartItem
              key={item.id + index}
              title={item.title}
              price={item.price}
              quantity={+item.quantity}
              imageSource={item.imageSource}
              addition={item.addition}
              summary={true}
              id={item.id}
            />
          ))}
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
  deliveryAddressWrapper: {
    marginVertical: RFValue(10),
    marginBottom: RFValue(20),
  },
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
    height: RFValue(64 - 8),
    borderRadius: RFValue(10),
    backgroundColor: '#FFFFFF',
    elevation: RFValue(2),
    margin: RFValue(1),
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
  orderList: {},
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputAddressWrapper: {
    backgroundColor: '#FFF',
    padding: RFValue(10),
    borderRadius: RFValue(10),
  },
  cancelButton: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    marginRight: RFValue(30),
  },
  cancelText: { color: SecondaryColor },
  saveButton: {
    backgroundColor: PrimaryColor + 20,
    flex: 1,
    marginLeft: RFValue(30),
  },
  saveText: { color: PrimaryColor },
  addressInputWrapper: { marginBottom: RFValue(10) },
  addressInput: { fontSize: RFValue(16), marginBottom: RFValue(10) },
});
