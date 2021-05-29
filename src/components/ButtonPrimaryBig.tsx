import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor } from '../modules/colors';

export interface ButtonPrimaryBigProps {
  title: string;
  onPress?: () => void;
  containerStyles?: RN.StyleProp<RN.ViewStyle>;
  containerProps?: RN.ViewProps;
  titleStyles?: RN.StyleProp<RN.TextStyle>;
  titleProps?: RN.TextProps;
}

export interface ButtonPrimaryBigState {}

export default class ButtonPrimaryBig extends React.Component<
  ButtonPrimaryBigProps,
  ButtonPrimaryBigState
> {
  constructor(props: ButtonPrimaryBigProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <RN.Pressable
        style={[styles.container, this.props.containerStyles]}
        onPress={this.props.onPress}
        android_ripple={{ color: '#FFF' }}
      >
        <RN.Text style={[styles.title, this.props.titleStyles]}>
          {this.props.title}
        </RN.Text>
      </RN.Pressable>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
    height: RFValue(56 - 8),
    borderRadius: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Avenir-Medium',
    color: '#FFFFFF',
    fontSize: RFValue(14),
  },
});
