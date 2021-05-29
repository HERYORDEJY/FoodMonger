import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';
import { SecondaryColor, PrimaryColor } from '../modules/colors';
import { CheckBoxActiveIcon, CheckBoxInactiveIcon } from '../svg/CheckBoxIcon';
import AccordionView from './Accordion';
import { ChevronDownCircle, ChevronUpCircle } from '../svg/SettingsIcon';
import { listOfAddOn } from '../api/datas';

export interface AddOnItemProps {
  data: {};
}

export interface AddOnItemState {}

export default class AddOnItem extends React.PureComponent<
  AddOnItemProps,
  AddOnItemState
> {
  constructor(props: AddOnItemProps) {
    super(props);

    this.state = {};
  }

  // componentDidMount(): void {
  //   listOfAddOn.map((e) => this.setState({ ...this.state, e }));
  // }

  plusQuantity = (addOn) => {
    this.setState({
      ...this.state,
      [addOn]: this.state[`${addOn}`] ? this.state[`${addOn}`] + 1 : 0 + 1,
    });
  };

  minusQuantity = (addOn) =>
    this.setState({
      ...this.state,
      [addOn]: this.state[`${addOn}`] ? this.state[`${addOn}`] - 1 : 0 - 1,
    });

  public render() {
    return (
      <>
        {Object.keys(this.props.data).map((d, index) => (
          <RN.View key={d + index.toString()} style={styles.addOnSubwrapper}>
            <AccordionView
              containerStyles={[styles.container]}
              arrowDownComponent={<ChevronDownCircle />}
              arrowUpComponent={<ChevronUpCircle />}
              headerComponent={(titleColor) => (
                <RN.Text style={[styles.addOnSubtitle, { color: titleColor }]}>
                  {d}
                </RN.Text>
              )}
              contentComponent={Object.values(this.props.data[`${d}`]).map(
                (opt: { id: string; title: string }, index) => (
                  <RN.View key={opt.id} style={styles.addOnOptionWrapper}>
                    <RN.Pressable style={[styles.addOnOptionTitleWrapper]}>
                      {this.state[`${opt.title.toLowerCase()}`] > 0 ? (
                        <CheckBoxActiveIcon />
                      ) : (
                        <CheckBoxInactiveIcon />
                      )}
                      <RN.Text style={styles.addOnOptionTitle}>
                        {opt.title}
                      </RN.Text>
                    </RN.Pressable>

                    <RN.View style={styles.quantityButtonWrapper}>
                      <RN.Pressable
                        disabled={
                          this.state[`${opt.title.toLowerCase()}`] > 0
                            ? false
                            : true
                        }
                        onPress={() =>
                          this.minusQuantity(opt.title.toLowerCase())
                        }
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
                        <RN.Text style={styles.quantityNumber}>
                          {this.state[`${opt.title}`] ?? 0}
                        </RN.Text>
                      </RN.View>
                      <RN.Pressable
                        onPress={() =>
                          this.plusQuantity(opt.title.toLowerCase())
                        }
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
            />
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
    fontFamily: 'Avenir-Bold',
    color: SecondaryColor,
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
    marginTop: RFValue(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: RFValue(10),
    height: RFValue(24),
  },
  addOnOptionTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 0,
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
    marginBottom: RFValue(0),
    textTransform: 'capitalize',
    paddingVertical: RFValue(10),
  },

  addOnSubwrapper: { justifyContent: 'center', marginBottom: RFValue(20) },
});
