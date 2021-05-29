import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgXml } from 'react-native-svg';

import { AppIntroSlide1 } from '../../svg/AppIntroSlide1';
import { AppIntroSlide2, IntroSlideXml2 } from '../../svg/AppIntroSlide2';
import { PrimaryColor, SecondaryColor } from '../../modules/colors';

import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import { _screenWidth } from '../../modules/dimension';
import { appIntroSlideData } from '../../api/datas';
import { useState } from 'react';

export interface AppIntroSliderProps {}

export interface AppIntroSliderState {}

export default function AppIntroSlider(props: AppIntroSliderProps) {
  const [scrollIndex, setScrollIndex] = useState(0);

  const onScrollIntro = (event) =>
    setScrollIndex(
      parseInt(String(event.nativeEvent.contentOffset.x / _screenWidth)),
    );

  console.log(scrollIndex);

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <RN.ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={_screenWidth + 2}
        onScroll={(event) => onScrollIntro(event)}
        pagingEnabled={true}
        scrollEventThrottle={5}
      >
        {appIntroSlideData.map((data, index) => (
          <RN.View style={styles.slideWrapper} key={data.id + index}>
            {/* <AppIntroSlide1 /> */}
            <SvgXml xml={data.xml} />
            <RN.View style={styles.descWrapper}>
              <RN.Text style={styles.title}>{data.title}</RN.Text>
              <RN.Text style={styles.subtitle} selectable={true}>
                {data.subtitle}
              </RN.Text>
            </RN.View>
          </RN.View>
        ))}
      </RN.ScrollView>
      <RN.View style={styles.bottomWrapper}>
        <RN.View style={styles.pagerWrapper}>
          {appIntroSlideData.map((data, index) => (
            <NB.Icon
              style={[
                styles.pagerIcon,
                { color: index === scrollIndex ? PrimaryColor : '#E3E3E3' },
              ]}
              name={'circle'}
              type={'FontAwesome'}
            />
          ))}
        </RN.View>
        <ButtonPrimaryBig title={'Next'} containerStyles={{ flex: 0.4 }} />
      </RN.View>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {},
  content: { width: _screenWidth },
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideWrapper: {
    alignItems: 'center',
    flex: 1,
    width: _screenWidth,
  },
  descWrapper: {
    marginHorizontal: RFValue(40),
  },
  title: {
    fontSize: RFValue(18),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
    textAlign: 'center',
    marginBottom: RFValue(20),
    marginTop: RFValue(40),
  },
  subtitle: {
    fontSize: RFValue(14),
    color: '#666666',
    fontFamily: 'Avenir-Regular',
    textAlign: 'center',
    lineHeight: RFValue(20),
  },
  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: RFValue(20),
  },
  pagerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pagerIcon: {
    fontSize: RFValue(12),
    color: '#E3E3E3',
    marginRight: RFValue(5),
  },
});
