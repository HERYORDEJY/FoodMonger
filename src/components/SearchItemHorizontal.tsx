import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, SecondaryColor } from '../modules/colors';
import { ArrowCircleIcon } from '../svg/ArrowCircleIcon';
import { PlusBoxIcon } from '../svg/PlusBoxIcon';

export interface SearchItemHorizontalProps {
  title: string;
  imageSource: any;
  price: string;
  potion: string;
}

export interface SearchItemHorizontalState {}

export default class SearchItemHorizontal extends React.Component<
  SearchItemHorizontalProps,
  SearchItemHorizontalState
> {
  constructor(props: SearchItemHorizontalProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <RN.Pressable style={[styles.container]}>
        <RN.View style={styles.contentWrapper}>
          <RN.View style={styles.imageWrapper}>
            <RN.Image style={styles.image} source={this.props.imageSource} />
          </RN.View>
          <RN.View style={styles.bottomWrapper}>
            {/* Title */}
            <RN.Text
              style={styles.title}
              lineBreakMode={'tail'}
              numberOfLines={1}
            >
              {this.props.title}
            </RN.Text>

            {/* Price */}
            <RN.Text style={[styles.addition]}>
              {this.props.addition} Addition
              {+this.props.addition > 1 ? 's' : ''}
            </RN.Text>

            <RN.View style={styles.last}>
              {/* Addition */}
              <RN.Text style={styles.price}>
                ₦
                <RN.Text style={styles.priceNumber}>{this.props.price}</RN.Text>
              </RN.Text>
            </RN.View>
          </RN.View>
        </RN.View>
        <RN.View style={styles.iconWrapper}>
          <PlusBoxIcon />
        </RN.View>
      </RN.Pressable>
    );
  }
}

const styles = RN.StyleSheet.create({
  iconWrapper: {
    height: RFValue(34 - 8),
    width: RFValue(34 - 8),
    backgroundColor: PrimaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: RFValue(10),
    borderBottomRightRadius: RFValue(10),
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  potion: { color: '#898A8D', fontSize: RFValue(12) },
  container: {
    // width: RFValue(327 - 8),
    height: RFValue(115 - 8),
    marginVertical: RFValue(5),
    padding: RFValue(10),
    paddingHorizontal: RFValue(10),
    elevation: RFValue(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: RFValue(10),
    margin: RFValue(1),
  },
  contentWrapper: {
    overflow: 'hidden',
    backgroundColor: '#FFFF',
    flexDirection: 'row',
    // alignItems: 'center',
  },
  imageWrapper: {
    width: RFValue(78 - 8),
    height: RFValue(78 - 8),
    overflow: 'hidden',
    borderRadius: RFValue(10),
  },
  image: { flex: 1, height: null, width: null },
  bottomWrapper: {
    // alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingLeft: RFValue(10),
    paddingBottom: 0,
    paddingRight: 0,
  },
  title: {
    fontSize: RFValue(14),
    fontFamily: 'Avenir-DemiBold',
    color: SecondaryColor,
    textTransform: 'capitalize',
  },
  price: {
    color: PrimaryColor,
    fontSize: RFValue(12),
    fontFamily: 'Avenir-Medium',
  },
  priceNumber: {
    fontSize: RFValue(16),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
  },

  addition: { color: '#898A8D', fontSize: RFValue(12) },
  last: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
