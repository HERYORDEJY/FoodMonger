import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';
import { generalCategoryData } from '../api/datas';
import ButtonPrimarySmall from './ButtonPrimarySmall';
import ButtonPrimaryBig from './ButtonPrimaryBig';
import { SecondaryColor } from '../modules/colors';

export interface FilterProps {}

export interface FilterState {}

export default class Filter extends React.Component<FilterProps, FilterState> {
  constructor(props: FilterProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <RN.View style={[styles.container]}>
        <RN.View style={[styles.headerWrapper]}>
          <RN.Text style={styles.headerTitle}>Filter</RN.Text>
          <NB.Icon name={'x'} type={'Feather'} style={styles.headerIcon} />
        </RN.View>

        <RN.View style={styles.sectionWrapper}>
          <RN.Text style={styles.sectionTitle}>Categories</RN.Text>
          <RN.View style={styles.sectionItems}>
            {generalCategoryData.map(
              (cat: { id: string; title: string }, index) => (
                <ButtonPrimarySmall
                  containerStyles={{
                    marginBottom: RFValue(10),
                    paddingHorizontal: RFValue(20),
                  }}
                  title={cat.title}
                  key={cat.id + index.toString()}
                />
              ),
            )}
          </RN.View>
        </RN.View>

        <RN.View style={styles.sectionWrapper}>
          <RN.Text style={styles.sectionTitle}>Price</RN.Text>
          <RN.View style={styles.sectionItems}>
            <RN.TextInput
              placeholder={'Minimum Price'}
              placeholderTextColor={'#909090'}
              style={styles.textInput}
            />
            <RN.Text style={styles.to}>To</RN.Text>
            <RN.TextInput
              placeholder={'Maximum Price'}
              placeholderTextColor={'#909090'}
              style={styles.textInput}
              keyboardType={'number-pad'}
              multiline={false}
            />
          </RN.View>
        </RN.View>

        <ButtonPrimaryBig title={'Apply Filter'} />

        <RN.Pressable style={styles.resetWrapper}>
          <RN.Text style={styles.resetText}>Reset</RN.Text>
        </RN.Pressable>
      </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: { padding: RFValue(20), flex: 1 },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: RFValue(20),
  },
  headerTitle: {
    fontSize: RFValue(24),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
  },
  headerIcon: {},
  sectionWrapper: {
    marginBottom: RFValue(20),
  },
  sectionTitle: {
    fontSize: RFValue(16),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
    marginBottom: RFValue(20),
    textTransform: 'capitalize',
  },
  sectionItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'stretch',
    marginBottom: RFValue(20),
    flexWrap: 'wrap',
  },
  to: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: RFValue(14),
    color: '#4B4B4B',
    fontFamily: 'Avenir-Regular',
  },
  textInput: {
    flex: 1,
    textAlign: 'center',
    width: RFValue(132 - 8),
    height: RFValue(47 - 8),
    borderWidth: RFValue(1),
    borderColor: '#CCCCCC',
    borderRadius: RFValue(10),
  },
  resetWrapper: {
    marginVertical: RFValue(10),
    padding: RFValue(20),
    alignItems: 'center',
  },
  resetText: {
    fontSize: RFValue(14),
    color: SecondaryColor,
    fontFamily: 'Avenir-Medium',
  },
});
