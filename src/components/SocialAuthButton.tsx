import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';
import { SecondaryColor } from '../modules/colors';

export interface SocialAuthButtonProps {
  type: 'google' | 'facebook';
  onPress: () => void;
}

export interface SocialAuthButtonState {}

export default class SocialAuthButton extends React.Component<
  SocialAuthButtonProps,
  SocialAuthButtonState
> {
  constructor(props: SocialAuthButtonProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <RN.Pressable
        {...this.props}
        style={[
          styles.container,
          { backgroundColor: this.props.type === 'facebook' && '#efefef' },
        ]}
      >
        <NB.Icon
          {...this.props}
          name={`${this.props.type}`}
          type={'FontAwesome'}
          style={styles.icon}
        />
        <RN.Text
          {...this.props}
          style={styles.title}
        >{`${this.props.type}`}</RN.Text>
      </RN.Pressable>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    borderRadius: RFValue(10),
    height: RFValue(56),
    width: RFValue(148),
    justifyContent: 'center',
  },
  icon: {
    color: SecondaryColor,
    fontSize: RFValue(20),
    paddingRight: RFValue(5),
  },
  title: {
    color: SecondaryColor,
    fontFamily: 'Avenir-Regular',
    fontSize: RFValue(14),
    paddingLeft: RFValue(5),
    textTransform: 'capitalize',
  },
});
