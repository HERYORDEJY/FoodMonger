import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';
import { SecondaryColor, PrimaryColor } from '../modules/colors';
import { CheckBoxActiveIcon, CheckBoxInactiveIcon } from '../svg/CheckBoxIcon';

export interface AddOnItemProps {
  data: {};
}

export interface AddOnItemState {}

export default class AddOnItem extends React.Component<
  AddOnItemProps,
  AddOnItemState
> {
  constructor(props: AddOnItemProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <>
        {Object.keys(this.props.data).map((d, index) => (
          <RN.View key={d + index.toString()} style={styles.addOnSubwrapper}>
            <RN.Text style={styles.addOnSubtitle}>{d}</RN.Text>
            {Object.values(this.props.data[`${d}`]).map(
              (opt: { id: string; title: string }, index) => (
                <RN.View key={opt.id} style={styles.addOnOptionWrapper}>
                  <RN.Pressable
                    style={[
                      styles.addOnOptionWrapper,
                      { justifyContent: 'flex-start', alignItems: 'center' },
                    ]}
                  >
                    <CheckBoxActiveIcon />
                    <RN.Text style={styles.addOnOptionTitle}>
                      {opt.title}
                    </RN.Text>
                  </RN.Pressable>

                  <RN.View style={styles.quantityButtonWrapper}>
                    <RN.Pressable
                      style={[
                        styles.quantityButton,
                        {
                          backgroundColor: '#F0F0F0',
                        },
                      ]}
                    >
                      <NB.Icon
                        style={styles.minusIcon}
                        name={'minus'}
                        type={'Feather'}
                      />
                    </RN.Pressable>
                    <RN.View style={styles.quantityNumberWrapper}>
                      <RN.Text style={styles.quantityNumber}>100</RN.Text>
                    </RN.View>
                    <RN.Pressable
                      style={[
                        styles.quantityButton,
                        {
                          backgroundColor: PrimaryColor,
                        },
                      ]}
                    >
                      <NB.Icon
                        style={styles.minusIcon}
                        name={'plus'}
                        type={'Feather'}
                      />
                    </RN.Pressable>
                  </RN.View>
                </RN.View>
              ),
            )}
          </RN.View>
        ))}
      </>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {},
  quantityButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityButton: {
    width: RFValue(30 - 8),
    height: RFValue(30 - 8),
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
  addOnOptionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: RFValue(30),
    height: RFValue(24),
  },
  addOnOptionTitle: {
    fontSize: RFValue(14),
    color: SecondaryColor,
    fontFamily: 'Avenir-Regular',
    marginLeft: RFValue(10),
    textTransform: 'capitalize',
  },

  addOnSubtitle: {
    fontSize: RFValue(14),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
    marginBottom: RFValue(10),
    textTransform: 'capitalize',
  },

  addOnSubwrapper: { justifyContent: 'center' },
});
