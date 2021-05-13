import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, SecondaryColor } from '../modules/colors';

export interface PromoCodeBarProps {}

export interface PromoCodeBarState {}

export default class PromoCodeBar extends React.Component<
  PromoCodeBarProps,
  PromoCodeBarState
> {
  constructor(props: PromoCodeBarProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <RN.View style={[styles.container]}>
        <RN.View style={styles.textInputWrapper}>
          <RN.TextInput
            placeholder={'Promo Code'}
            placeholderTextColor={'#CCCCCC'}
            style={styles.textInput}
          />
        </RN.View>
        <RN.Pressable style={styles.applyWrapper}>
          <RN.Text style={styles.apply}>Apply</RN.Text>
        </RN.Pressable>
      </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: RFValue(10),
    borderWidth: RFValue(1),
    borderColor: '#F3F3F3',
    height: RFValue(56 - 8),
    paddingHorizontal: RFValue(5),
    marginTop: RFValue(30),
    marginBottom: RFValue(20),
  },
  textInputWrapper: { flex: 1 },
  textInput: { flex: 1, fontSize: RFValue(14), color: SecondaryColor },
  applyWrapper: {
    backgroundColor: PrimaryColor + '17',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(10),
    borderWidth: RFValue(1),
    borderColor: '#F3F3F3',
    height: RFValue(45 - 8),
    width: RFValue(115 - 8),
  },
  apply: {
    fontSize: RFValue(14),
    color: PrimaryColor,
    fontFamily: 'Avenir-Medium',
  },
});
