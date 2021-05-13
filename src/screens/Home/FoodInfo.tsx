import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../components/NavigationBar';
import { ArrowIconLeft } from '../../svg/ArrowIcon';
import { PrimaryColor, SecondaryColor } from '../../modules/colors';
import { CheckBoxActiveIcon } from '../../svg/CheckBoxIcon';
import AddOnItem from '../../components/AddOnItem';
import { addOnData } from '../../api/datas';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import { FavoriteActiveIcon } from '../../svg/FavoriteIcon';
import Filter from '../../components/Filter';

export interface FoodInfoProps {}

export interface FoodInfoState {}

export default function FoodInfo(props: FoodInfoProps) {
  const renderPrice = () => (
    <RN.View>
      <RN.Text style={styles.priceHeader}>Price</RN.Text>
      <RN.Text style={styles.priceNumber}>₦2000</RN.Text>
    </RN.View>
  );

  const renderQuantity = () => (
    <RN.View>
      <RN.Text style={styles.quantityHeader}>Quantity</RN.Text>
      <RN.View style={styles.quantityButtonWrapper}>
        <RN.Pressable style={styles.quantityButton}>
          <NB.Icon style={styles.minusIcon} name={'minus'} type={'Feather'} />
        </RN.Pressable>
        <RN.View style={styles.quantityNumberWrapper}>
          <RN.Text style={styles.quantityNumber}>100</RN.Text>
        </RN.View>
        <RN.Pressable
          style={[styles.quantityButton, { backgroundColor: PrimaryColor }]}
        >
          <NB.Icon style={styles.minusIcon} name={'plus'} type={'Feather'} />
        </RN.Pressable>
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
      <RN.ImageBackground
        source={require('../../assets/images/food-info-bg.png')}
        style={styles.imageBackground}
      >
        {/* <NavigationBar /> */}
        <RN.Pressable style={styles.navIconWrapper}>
          {/* <ArrowIconLeft /> */}
          <NB.Icon type={'Feather'} name={'chevron-left'} style={styles.icon} />
        </RN.Pressable>
      </RN.ImageBackground>
      <RN.View style={styles.wrapper}>
        <RN.Pressable style={styles.favoriteWrapper}>
          <FavoriteActiveIcon />
        </RN.Pressable>
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
        <ButtonPrimaryBig
          title={'Add to Cart'}
          containerStyles={styles.buttonPrimaryBig}
        />
      </RN.View>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { paddingBottom: 0, marginBottom: 0 },
  content: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    // paddingBottom: RFValue(0),
    // marginBottom: RFValue(0),
    // zIndex: 10000,
    top: RFValue(-30),
    bottom: 0,
    height: 200,
    flex: 1,
    padding: RFValue(20),
  },
  contentContainerStyle: {
    // backgroundColor: '#FFFFFF',
    // top: RFValue(-30),
    // zIndex: 10000,
  },
  wrapper: {
    // backgroundColor: '#FFFFFF',
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),

    // padding: RFValue(20),
    zIndex: 10000,
    // paddingBottom: RFValue(30),
    height: '100%',
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: RFValue(358 - 8),
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
    color: PrimaryColor,
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
  buttonPrimaryBig: { margin: RFValue(20), marginTop: RFValue(0) },
  favoriteWrapper: {
    backgroundColor: '#FFFFFF',
    width: RFValue(56 - 8),
    height: RFValue(56 - 8),
    borderRadius: RFValue(56),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    zIndex: 2000,
    marginRight: RFValue(20),
    top: RFValue(-50),
    elevation: RFValue(2),
  },
});
