import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../components/NavigationBar';
import { ArrowIconLeft } from '../../svg/ArrowIcon';
import {
  GrayColor,
  PrimaryColor,
  ScreenBG,
  SecondaryColor,
} from '../../modules/colors';
import { CheckBoxActiveIcon } from '../../svg/CheckBoxIcon';
import AddOnItem from '../../components/AddOnItem';
import { addOnData } from '../../api/datas';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import { FavoriteActiveIcon } from '../../svg/FavoriteIcon';
import Filter from '../../components/Filter';
import ButtonPrimarySmall from '../../components/ButtonPrimarySmall';
import DialogueBox from '../../components/DialogueBox';
import { useState } from 'react';
import DeliverySuccessfulModal from '../../components/DeliverySuccessfulModal';
export interface FoodInfoProps {
  price: number;
  quantity: number;
  favorite: boolean;
}

export interface FoodInfoState {}

export default function FoodInfo2(props: FoodInfoProps) {
  const [foodInfo, setFoodInfo] = React.useState({ price: 2000, quantity: 0 });
  const [confirmDialogueVisible, setConfirmDialogueVisible] = useState(false);
  const [successfullDialogueVisible, setSuccessfulDialogueVisible] = useState(
    false,
  );

  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => setFavorite(!favorite);

  const plusQuantity = (addOn) => {
    setFoodInfo({
      ...foodInfo,
      quantity: foodInfo.quantity + 1,
    });
  };

  const minusQuantity = (addOn) =>
    setFoodInfo({
      ...foodInfo,
      quantity: foodInfo.quantity - 1,
    });

  const renderPrice = () => (
    <RN.View>
      <RN.Text style={styles.priceHeader}>Price</RN.Text>
      <RN.Text style={styles.priceNumber}>₦{foodInfo.price}</RN.Text>
    </RN.View>
  );

  const renderQuantity = () => (
    <RN.View>
      <RN.Text style={styles.quantityHeader}>Quantity</RN.Text>
      <RN.View style={styles.quantityButtonWrapper}>
        <RN.Pressable
          style={styles.quantityButton}
          onPress={minusQuantity}
          disabled={foodInfo.quantity > 0 ? false : true}
        >
          <NB.Icon style={styles.minusIcon} name={'minus'} type={'Feather'} />
        </RN.Pressable>

        <RN.View style={styles.quantityNumberWrapper}>
          <RN.Text style={styles.quantityNumber}>{foodInfo.quantity}</RN.Text>
        </RN.View>
        <RN.Pressable
          onPress={plusQuantity}
          style={[styles.quantityButton, { backgroundColor: PrimaryColor }]}
        >
          <NB.Icon style={styles.minusIcon} name={'plus'} type={'Feather'} />
        </RN.Pressable>
      </RN.View>
    </RN.View>
  );

  const showConfirmDialogue = () => setConfirmDialogueVisible(true);
  const showSuccessfulDialogue = () => setSuccessfulDialogueVisible(true);
  const hideConfirmDialogue = () => {
    setConfirmDialogueVisible(false);
    setSuccessfulDialogueVisible(true);
  };

  const renderConfirmDeliverTimeNotif = () => (
    <RN.View style={{}}>
      <RN.Text
        style={{
          fontSize: RFValue(14),
          fontFamily: 'Avenir-DemiBold',
          textAlign: 'center',
          paddingHorizontal: RFValue(20),
          color: SecondaryColor,
        }}
      >
        When do you want the food to be delivered
      </RN.Text>
      <RN.View style={styles.confrimButtonWrapper}>
        <ButtonPrimaryBig
          title={'Later'}
          titleStyles={{ color: PrimaryColor }}
          containerStyles={{
            backgroundColor: '#FFECDC',
            flex: 1,
            marginRight: RFValue(15),
          }}
        />
        <ButtonPrimaryBig
          title={'ASAP'}
          containerStyles={{ flex: 1, marginLeft: RFValue(15) }}
          onPress={hideConfirmDialogue}
        />
      </RN.View>
    </RN.View>
  );

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <RN.View style={styles.imageBackground}>
        <RN.View style={styles.heroOverlay} />
        <RN.View style={styles.navWrapper}>
          <NavigationBar
            rightComponent={
              <RN.Pressable
                style={styles.favoriteWrapper}
                onPress={toggleFavorite}
              >
                <FavoriteActiveIcon
                  fill={favorite ? PrimaryColor : GrayColor}
                />
              </RN.Pressable>
            }
          />
        </RN.View>

        <RN.View style={styles.heroImageWrapper}>
          <RN.Image
            source={require('../../assets/images/jollof-rice-big.png')}
            style={styles.heroImage}
          />
        </RN.View>
      </RN.View>
      <RN.View style={styles.wrapper}>
        <RN.ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        >
          <RN.Text style={styles.title}>Mixed with Chicken and Coke</RN.Text>
          <RN.Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            egestas ultrices tristique ornare congue adipiscing tincidunt et.
          </RN.Text>

          <RN.View style={styles.priceQuanityWrapper}>
            {renderPrice()}
            {renderQuantity()}
          </RN.View>

          <RN.View style={styles.addOnWrapper}>
            <RN.Text style={styles.addOnTitle}>Choice of Add On</RN.Text>
            <RN.View style={styles.addOnSubwrapper}>
              <AddOnItem data={addOnData} />
            </RN.View>
          </RN.View>
        </RN.ScrollView>
        <RN.View style={styles.bottomWrapper}>
          <RN.View style={styles.bottomPriceWrapper}>
            <RN.Text style={styles.priceHeader}>Total Order</RN.Text>
            <RN.Text style={styles.price}>
              ₦<RN.Text style={styles.priceNumber}>3300</RN.Text>
            </RN.Text>
          </RN.View>
          <ButtonPrimaryBig
            title={'Add to Cart'}
            containerStyles={styles.buttonPrimaryBig}
            onPress={showConfirmDialogue}
          />
        </RN.View>
      </RN.View>
      <DialogueBox visible={confirmDialogueVisible}>
        {renderConfirmDeliverTimeNotif()}
      </DialogueBox>
      <DeliverySuccessfulModal visible={successfullDialogueVisible} />
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { paddingBottom: 0, marginBottom: 0, backgroundColor: ScreenBG },
  content: {
    backgroundColor: ScreenBG,
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    // paddingBottom: RFValue(0),
    // marginBottom: RFValue(0),
    zIndex: 10000,
    // top: RFValue(-30),
    bottom: 0,
    height: 200,
    flex: 1,
    padding: RFValue(20),
  },
  contentContainerStyle: {
    // backgroundColor: '#FFFFFF',
    // top: RFValue(-30),
    zIndex: 10000,
    paddingBottom: RFValue(20),
  },
  wrapper: {
    backgroundColor: ScreenBG,
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),

    // padding: RFValue(20),

    // paddingBottom: RFValue(30),
    height: '100%',
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: RFValue(358 - 8),
    zIndex: 10,
    // borderBottomLeftRadius: RFValue(637),
    // borderBottomRightRadius: RFValue(637),
    backgroundColor: ScreenBG,
    // borderBottomLeftRadius: RFValue(637 - 8),
    // borderBottomRightRadius: RFValue(637 - 8),
    // paddingHorizontal: RFValue(20),
    alignItems: 'center',
  },
  heroOverlay: {
    ...RN.StyleSheet.absoluteFillObject,
    backgroundColor: '#FFECDC',
    borderBottomLeftRadius: RFValue(637),
    borderBottomRightRadius: RFValue(637),
    height: RFValue(637),
    width: RFValue(637),
    top: RFValue(-637 / 2.2),
    left: RFValue(-637 / 4),
    zIndex: 10000,
    alignItems: 'center',
    alignSelf: 'center',
  },
  heroImageWrapper: {
    height: RFValue(274.35 - 8),
    width: RFValue(356 - 8),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
  },
  heroImage: {
    flex: 1,
    // height: null,
    // width: null,
    resizeMode: 'contain',
    zIndex: 10000,
  },
  navIconWrapper: {
    backgroundColor: '#FFFFFF',
    width: RFValue(56 - 8),
    height: RFValue(56 - 8),
    borderRadius: RFValue(10),
    margin: RFValue(20),
    marginTop: RFValue(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: RFValue(20),
    color: SecondaryColor,
  },
  title: {
    fontSize: RFValue(24),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
    marginBottom: RFValue(10),
    marginRight: RFValue(30),
  },
  subtitle: {
    fontSize: RFValue(14),
    color: '#666666',
    fontFamily: 'Avenir-Regular',
    lineHeight: RFValue(20),
    marginBottom: RFValue(20),
  },
  priceQuanityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: RFValue(30),
    // alignItems: 'center',
  },
  priceHeader: {
    fontSize: RFValue(14),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
    marginBottom: RFValue(10),
  },
  priceNumber: {
    fontSize: RFValue(24),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
    marginBottom: RFValue(10),
  },
  quantityHeader: {
    fontSize: RFValue(14),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
    marginBottom: RFValue(10),
  },
  quantityButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityButton: {
    width: RFValue(33.8 - 8),
    height: RFValue(33.8 - 8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SecondaryColor,
    borderRadius: RFValue(5),
  },
  minusIcon: {
    fontSize: RFValue(12),
    color: '#FFFFFF',
    fontFamily: 'Avenir-Bold',
  },
  quantityNumberWrapper: {
    width: RFValue(45 - 8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityNumber: {
    fontSize: RFValue(18),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
    // paddingHorizontal: RFValue(10),
  },
  addOnWrapper: {},
  addOnTitle: {
    fontSize: RFValue(14),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
    marginBottom: RFValue(10),
  },
  addOnSubwrapper: {
    padding: RFValue(10),
  },
  buttonPrimaryBig: { flex: 0.6 },
  favoriteWrapper: {
    backgroundColor: '#FFFFFF',
    width: RFValue(56 - 8),
    height: RFValue(56 - 8),
    borderRadius: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: RFValue(2),
    zIndex: 10000000,
  },
  navWrapper: {
    paddingHorizontal: RFValue(20),
    // paddingTop: RFValue(30),
    paddingTop: 30,
    zIndex: 10000,
    width: '100%',
  },
  price: {
    color: PrimaryColor,
    fontSize: RFValue(16),
    fontFamily: 'Avenir-Medium',
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(10),
    paddingHorizontal: RFValue(20),
    backgroundColor: '#FFECDC',
  },
  bottomPriceWrapper: {},
  confrimButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RFValue(20),
  },
});
