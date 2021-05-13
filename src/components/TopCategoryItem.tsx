import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { SecondaryColor } from '../modules/colors';
import { ArrowCircleIcon } from '../svg/ArrowCircleIcon';

export interface TopCategoryItemProps {
  title: string;
  imageSource: any;
}

export interface TopCategoryItemState {}

export default class TopCategoryItem extends React.Component<
  TopCategoryItemProps,
  TopCategoryItemState
> {
  constructor(props: TopCategoryItemProps) {
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
          <ArrowCircleIcon />
        </RN.View>
      </RN.Pressable>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    width: RFValue(87 - 8),
    height: RFValue(125 - 8),
    overflow: 'hidden',
    borderRadius: RFValue(10),
    alignItems: 'center',
    backgroundColor: '#FFFF',
    elevation: RFValue(2),
    marginVertical: RFValue(5),
    marginRight: RFValue(10),
  },
  imageWrapper: {
    width: RFValue(87 - 8),
    height: RFValue(60 - 8),
    overflow: 'hidden',
  },
  image: { flex: 1, height: null, width: null },
  bottomWrapper: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  title: {
    fontSize: RFValue(12),
    fontFamily: 'Avenir-Medium',
    color: SecondaryColor,
    textTransform: 'capitalize',
  },
});
