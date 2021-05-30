import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor } from '../modules/colors';

export interface ButtonPrimarySmallProps {
  title: string;
  onPress?: () => void;
  containerStyles?: RN.StyleProp<RN.PressableProps>;
}

export interface ButtonPrimarySmallState {
  selected: boolean;
}

export default class ButtonPrimarySmall extends React.Component<
  ButtonPrimarySmallProps,
  ButtonPrimarySmallState
> {
  constructor(props: ButtonPrimarySmallProps) {
    super(props);

    this.state = { selected: false };
  }

  onPressIn = () =>
    this.setState(() => ({ ...this.state, selected: !this.state.selected }));

  public render() {
    return (
      <RN.Pressable
        onPressIn={this.onPressIn}
        style={[
          styles.container,
          {
            ...this.props.containerStyles,
            backgroundColor: this.state.selected ? PrimaryColor : '#F2F2F2',
          },
        ]}
        onPress={this.props.onPress}
      >
        <RN.Text
          style={[
            styles.title,
            { color: this.state.selected ? '#FFFFFF' : '#4B4B4B' },
          ]}
        >
          {this.props.title}
        </RN.Text>
      </RN.Pressable>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    height: RFValue(47 - 8),
    borderRadius: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: RFValue(20),
  },
  title: {
    fontFamily: 'Avenir-Regular',
    color: '#4B4B4B',
    fontSize: RFValue(14),
  },
});
