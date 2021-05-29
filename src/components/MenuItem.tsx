import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { SecondaryColor } from '../modules/colors';
import { ArrowCircleIcon } from '../svg/ArrowCircleIcon';

export interface MenuItemProps {
  title: string;
  imageSource: any;
}

export interface MenuItemState {}

export default class MenuItem extends React.Component<
  MenuItemProps,
  MenuItemState
> {
  constructor(props: MenuItemProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <RN.Pressable style={[styles.container]}>
        <RN.View style={styles.imageWrapper}>
          <RN.Image style={styles.image} source={this.props.imageSource} />
        </RN.View>
        <RN.View style={styles.bottomWrapper}>
          <RN.Text style={styles.title}>{this.props.title}</RN.Text>
        </RN.View>
      </RN.Pressable>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    width: RFValue(150 - 8),
    height: RFValue(149 - 8),
    overflow: 'hidden',
    borderRadius: RFValue(10),
    alignItems: 'center',
    backgroundColor: '#FFFF',
    elevation: RFValue(2),
    margin: RFValue(0),
    marginVertical: RFValue(0),
    marginBottom: RFValue(20),
  },
  imageWrapper: {
    width: RFValue(150 - 8),
    height: RFValue(107 - 8),
    overflow: 'hidden',
  },
  image: { flex: 1, height: null, width: null },
  bottomWrapper: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  title: {
    fontSize: RFValue(16),
    fontFamily: 'Avenir-DemiBold',
    color: SecondaryColor,
    textTransform: 'capitalize',
  },
});
