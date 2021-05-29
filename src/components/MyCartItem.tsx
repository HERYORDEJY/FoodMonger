import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';

import { PrimaryColor, SecondaryColor } from '../modules/colors';
import { ArrowCircleIcon } from '../svg/ArrowCircleIcon';
import { PlusBoxIcon } from '../svg/PlusBoxIcon';

export interface MyCartItemProps {
  id: string;
  title: string;
  imageSource: any;
  price: string;
  quantity: string | number;
  addition: string | number;
  summary?: boolean;
  onChangeQuantity: (string, string) => void;
}

export interface MyCartItemState {
  price: number;
  quantity: MyCartItemProps['quantity'];
}

export default class MyCartItem extends React.Component<
  MyCartItemProps,
  MyCartItemState
> {
  constructor(props: MyCartItemProps) {
    super(props);

    this.state = { price: 2000, quantity: Number(this.props.quantity) };
  }

  plusQuantity = (id) => {
    this.setState((prevState, props) => {
      this.props.onChangeQuantity(this.props.id, +prevState.quantity + 1);
      return {
        ...this.state,
        quantity: +prevState.quantity + 1,
      };
    });
  };

  minusQuantity = (id) => {
    this.setState((prevState, props) => {
      this.props.onChangeQuantity(this.props.id, +prevState.quantity - 1);
      return {
        ...this.state,
        quantity: +prevState.quantity - 1,
      };
    });
  };

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

              {/* Quantity select */}
              <RN.View style={styles.quantityButtonWrapper}>
                <RN.Pressable
                  onPress={this.minusQuantity}
                  disabled={
                    this.props.summary
                      ? true
                      : +this.state.quantity > 0
                      ? false
                      : true
                  }
                  style={[
                    styles.quantityButton,
                    {
                      backgroundColor: this.props.summary
                        ? 'transparent'
                        : '#F3F3F3',
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
                    {+this.state.quantity}
                  </RN.Text>
                </RN.View>
                <RN.Pressable
                  onPress={this.plusQuantity}
                  disabled={this.props.summary}
                  style={[
                    styles.quantityButton,
                    {
                      backgroundColor: this.props.summary
                        ? 'transparent'
                        : PrimaryColor,
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
          </RN.View>
        </RN.View>
      </RN.Pressable>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    // width: RFValue(327 - 8),
    height: RFValue(115 - 8),
    margin: RFValue(1),
    marginBottom: RFValue(10),
    padding: RFValue(10),
    paddingHorizontal: RFValue(10),
    elevation: RFValue(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: RFValue(10),
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
  iconWrapper: {
    height: RFValue(34 - 8),
    width: RFValue(34 - 8),
    backgroundColor: PrimaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: RFValue(10),
  },
  addition: { color: '#898A8D', fontSize: RFValue(12) },
  last: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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
    color: SecondaryColor,
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
});
