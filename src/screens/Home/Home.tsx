import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import HomeHeaderBar from '../../components/HomeHeaderBar';
import HomeSearchBar from '../../components/HomeSearchBar';
import AdvertItem from '../../components/AdvertItem';
import Swiper from '../../components/Swiper';
import {
  advertData,
  specialCombosData,
  topCategoryData,
} from '../../api/datas';
import { StringSchema } from 'yup';
import { _screenWidth } from '../../modules/dimension';
import { ScreenBG, SecondaryColor } from '../../modules/colors';
import TopCategoryItem from '../../components/TopCategoryItem';
import SpecialComboItem from '../../components/SpecialComboItem';

export interface HomeProps {}

export interface HomeState {}

export default function Home(props: HomeProps) {
  const renderAdverts = () => (
    <Swiper
      contentContainerStyle={styles.renderAdvertsContainer}
      data={advertData}
      horizontal={true}
    >
      {advertData.map((advert: { id: string }, index) => (
        <RN.Pressable style={styles.advertItem} key={advert.id}>
          <AdvertItem
            imageSource={require('../../assets/images/advertImage.png')}
          />
        </RN.Pressable>
      ))}
    </Swiper>
  );

  const renderTopCategory = () => (
    <RN.View style={styles.topCategoryWrapper}>
      <RN.View style={styles.topCategoryHeaderWrapper}>
        <RN.Text style={styles.topCategoryTitle}>Top Categories</RN.Text>
        <RN.Pressable>
          <RN.Text style={styles.topCategorySubtitle}>See All</RN.Text>
        </RN.Pressable>
      </RN.View>
      <RN.ScrollView
        style={styles.renderTopCategory}
        contentContainerStyle={styles.renderTopCategoryContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {topCategoryData.map(
          (cat: { id: string; title: string; imageSource: any }, index) => (
            <RN.Pressable style={styles.topCategoryItem} key={cat.id}>
              <TopCategoryItem
                title={cat.title}
                imageSource={cat.imageSource}
              />
            </RN.Pressable>
          ),
        )}
      </RN.ScrollView>
    </RN.View>
  );

  // TODO layout of 2 columns yet to be done
  const renderSpecialCombos = () => (
    <RN.View style={styles.combosWrapper}>
      <RN.View style={styles.topCategoryHeaderWrapper}>
        <RN.Text style={styles.topCategoryTitle}>Special Combos</RN.Text>
        <RN.Pressable>
          <RN.Text style={styles.topCategorySubtitle}>See All</RN.Text>
        </RN.Pressable>
      </RN.View>
      <RN.ScrollView
        style={styles.renderTopCategory}
        contentContainerStyle={styles.renderTopCategoryContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {specialCombosData.map(
          (
            cat: {
              id: string;
              title: string;
              price: string;
              potion: string;
              imageSource: any;
            },
            index,
          ) => (
            <RN.Pressable style={styles.topCategoryItem} key={cat.id}>
              <SpecialComboItem
                title={cat.title}
                imageSource={cat.imageSource}
                price={cat.price}
                potion={cat.potion}
              />
            </RN.Pressable>
          ),
        )}
      </RN.ScrollView>
    </RN.View>
  );

  const renderHeader = () => {
    return (
      <RN.View>
        {renderAdverts()}
        {renderTopCategory()}
        {renderSpecialCombos()}
      </RN.View>
    );
  };

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={ScreenBG} />
      <RN.View style={styles.topWrapper}>
        <HomeHeaderBar />
        <HomeSearchBar />
      </RN.View>

      <RN.FlatList
        ListHeaderComponent={renderHeader()}
        data={advertData}
        renderItem={() => {}}
      />
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { paddingTop: RFValue(20), backgroundColor: ScreenBG },
  content: {},
  contentContainerStyle: {},
  topWrapper: { paddingHorizontal: RFValue(20), paddingTop: RFValue(0) },
  renderAdvertsContainer: {
    paddingHorizontal: RFValue(20),
    // paddingRight: RFValue(150),
    marginBottom: RFValue(20),
    // flex: 1,
  },
  advertItem: { marginRight: RFValue(10) },
  renderTopCategoryContainer: {
    paddingHorizontal: RFValue(20),
    marginBottom: RFValue(40),
  },
  topCategoryItem: { marginRight: RFValue(10) },
  topCategoryWrapper: { marginTop: RFValue(40) },
  combosWrapper: { marginBottom: RFValue(40) },
  topCategoryHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(20),
  },
  topCategoryTitle: {
    fontSize: RFValue(18),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
  },
  topCategorySubtitle: {
    fontSize: RFValue(14),
    color: SecondaryColor,
    fontFamily: 'Avenir-Medium',
  },
  renderTopCategory: { marginTop: RFValue(20) },
});
