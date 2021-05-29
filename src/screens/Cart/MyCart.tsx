import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { CartIcon } from '../../svg/CartIcon';
import { PrimaryColor, ScreenBG, SecondaryColor } from '../../modules/colors';
import MyCartItem from '../../components/MyCartItem';
import PromoCodeBar from '../../components/PromoCodeBar';
import MyCartinvoice from '../../components/MyCartInvoice';
import NavigationBar from '../../components/NavigationBar';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import { useNavigation } from '@react-navigation/native';
import { cartItemData, promoCodeData } from '../../api/datas';

export interface MyCartProps {}

export interface MyCartState {}

interface CartItemProps {
  id: string;
  title: string;
  price: string;
  discountPercent: string;
  quantity: string;
  addition: string;
  imageSource: any;
}

interface PromoCodeProps {
  id: string;
  title: string;
  code: string;
  discountPercent: string;
}

export default function MyCart(props: MyCartProps) {
  //cart item (price & quamtity) state
  const [priceQuantity, setPriceQuantity] = React.useState([{}]);

  //useEffect for loading price & quantity of cart items
  React.useEffect(
    () =>
      setPriceQuantity(
        cartItemData.map(
          ({ id, price, quantity, discountPercent }: CartItemProps, index) => ({
            id,
            price,
            quantity,
            // discountPercent,
          }),
        ),
      ),
    [],
  );

  //Promo code state
  const [promoCode, setPromoCode] = React.useState({ code: '', info: {} });

  //on Enter promo code
  const onEnterPromoCode = (code: string) => {
    setPromoCode({ code, info: {} });
    console.log(code);
  };

  //  Apply promo code
  const onApplyPromoCode = () => {
    for (let code in promoCodeData) {
      if (promoCodeData[code] === promoCode.code) {
        setPromoCode({
          ...promoCode,
          info: code,
        });
      }
    }
  };
  console.log(promoCode);

  // navigation instance
  const navigation = useNavigation();

  //calculate Subtotal
  const subTotalPrice = priceQuantity
    .map((li: CartItemProps) => +li.price * +li.quantity)
    .reduce((sum, val) => sum + val, 0);

  //calculate Discount
  // const discountPrice = Math.ceil(
  //   priceQuantity
  //     .map(
  //       (li: CartItemProps) =>
  //         (+li.discountPercent / 100) * +li.price * +li.quantity,
  //     )
  //     .reduce((sum, val) => sum + val, 0),
  // );

  const discountPrice = Math.ceil(
    Math.ceil(subTotalPrice * (+(promoCode.info.discountPercent ?? 0) / 100)),
  );

  //change item quantity
  const changeQuantity = (id, quantity) =>
    setPriceQuantity(
      priceQuantity.map((item: CartItemProps, index) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    );

  //render for if cart is empty
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

  // render for if cart is not empty
  const renderCartList = () => (
    <RN.View style={styles.cartListWrapper}>
      {cartItemData.map((item: CartItemProps, index) => (
        <MyCartItem
          key={item.id + index}
          title={item.title}
          price={item.price}
          quantity={+item.quantity}
          imageSource={item.imageSource}
          addition={item.addition}
          onChangeQuantity={changeQuantity}
          id={item.id}
        />
      ))}
      <PromoCodeBar
        onEnterCode={onEnterPromoCode}
        onApplyCode={onApplyPromoCode}
      />
      <MyCartinvoice subtotal={subTotalPrice} discount={discountPrice} />
      <ButtonPrimaryBig
        title={'Check Out'}
        onPress={() => navigation.navigate('CheckOut')}
        containerStyles={styles.checkOutButtonWrapper}
      />
    </RN.View>
  );

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={ScreenBG} />
      <NavigationBar
        leftComponent={<RN.Text style={styles.screenTitle}>My Cart</RN.Text>}
      />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        {cartItemData.length > 0 ? renderCartList() : renderEmptyCart()}
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    padding: RFValue(20),
    paddingBottom: RFValue(0),
    backgroundColor: ScreenBG,
    paddingTop: 0,
  },
  content: { flex: 1 },
  contentContainerStyle: {
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingBottom: RFValue(20),
  },
  emptyCartWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: RFValue(30),
  },
  cartListWrapper: {
    // alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // marginTop: RFValue(30),
  },
  headerWrapper: { alignItems: 'flex-start', paddingHorizontal: RFValue(20) },
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
  screenTitle: {
    fontSize: RFValue(20),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
  },
  checkOutButtonWrapper: { marginVertical: RFValue(10) },
});
