import * as React from 'react';
import * as RN from 'react-native';
import { Asset } from 'expo-asset';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';

import { rfv } from '../modules/sizing';
import { BellIcon } from '../svg/BellIcon';
import { ScreenBG, SecondaryColor } from '../modules/colors';

export interface HomeHeaderBarProps {}

export interface HomeHeaderBarState {}

export default class HomeHeaderBar extends React.Component<
  HomeHeaderBarProps,
  HomeHeaderBarState
> {
  constructor(props: HomeHeaderBarProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <RN.View style={[styles.container]}>
        <RN.View style={styles.bioWrapper}>
          <NB.Thumbnail
            small={true}
            style={styles.thumbnail}
            source={require('../assets/images/user2.jpg')}
            square={true}
          />
          <RN.View>
            <RN.Text style={styles.greeting}>Good Morning</RN.Text>
            <RN.Text style={styles.name}>Oyebode</RN.Text>
          </RN.View>
        </RN.View>
        <RN.Pressable style={styles.iconWrapper}>
          <BellIcon />
        </RN.Pressable>
      </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    height: RFValue(56 - 8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: RFValue(20),
    backgroundColor: ScreenBG,
  },
  bioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  thumbnail: {
    borderRadius: RFValue(10),
    width: RFValue(42),
    height: RFValue(42),
    marginRight: RFValue(10),
  },
  greeting: { fontSize: RFValue(12), color: SecondaryColor },
  name: {
    fontSize: RFValue(20),
    color: SecondaryColor,
    paddingTop: RFValue(5),
  },
  iconWrapper: {
    width: RFValue(56 - 8),
    height: rfv(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
