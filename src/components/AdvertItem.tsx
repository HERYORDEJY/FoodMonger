import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export interface AdvertItemProps {
  imageSource: any;
}

export interface AdvertItemState {}

export default class AdvertItem extends React.Component<
  AdvertItemProps,
  AdvertItemState
> {
  constructor(props: AdvertItemProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <RN.View style={[styles.container]}>
        <RN.Image source={this.props.imageSource} style={styles.image} />
      </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: RFValue(309 - 8),
    height: RFValue(129 - 8),
    borderRadius: RFValue(10),
  },
  image: { width: null, height: null, flex: 1 },
});
