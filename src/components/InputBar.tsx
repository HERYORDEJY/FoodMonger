import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';

import { PrimaryColor, SecondaryColor } from '../modules/colors';

export interface InputBarProps {
  placeholder: string;
  placeholderTextColor?: string;
  keyboardType?: string;
  secureTextEntry?: boolean;
  errors?: any;
  touched?: boolean;
  onChangeText?: (e: string) => void;
  onBlur?: () => void;
  value?: string;
  containerStyles?: {};
}

export interface InputBarState {
  showPassword: boolean;
}

export default class InputBar extends React.Component<
  InputBarProps,
  InputBarState
> {
  constructor(props: InputBarProps) {
    super(props);

    this.state = { showPassword: false };
  }

  onShowPassword = () =>
    this.setState({ ...this.state, showPassword: !this.state.showPassword });

  public render() {
    const { touched, errors, placeholder } = this.props;

    return (
      <RN.View
        style={[
          styles.container,
          {
            ...this.props.containerStyles,
            borderColor: touched ? PrimaryColor : '#CCCCCC',
            flexDirection:
              placeholder.toLowerCase() === 'password' ? 'row' : 'column',
            justifyContent:
              placeholder.toLowerCase() === 'password'
                ? 'space-between'
                : 'flex-start',
            alignItems:
              placeholder.toLowerCase() === 'password'
                ? 'center'
                : 'flex-start',
          },
        ]}
      >
        <RN.View>
          <RN.Text
            style={[
              styles.placeholder,
              { color: touched ? SecondaryColor : '#CCCCCC' },
            ]}
          >
            {this.props.placeholder}
          </RN.Text>
          {/*  // TODO on touch not responding */}
          <RN.TextInput
            {...this.props}
            onBlur={this.props.onBlur}
            style={styles.input}
            secureTextEntry={!this.state.showPassword}
          />
        </RN.View>
        {placeholder.toLowerCase() === ('password' || 'confirm password') && (
          <RN.Pressable
            style={styles.iconWrapper}
            onPress={this.onShowPassword}
          >
            <NB.Icon
              style={[styles.icon]}
              name={!this.state.showPassword ? 'eye' : 'eye-off'}
              type={'Feather'}
            />
          </RN.Pressable>
        )}
      </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    borderWidth: RFValue(1),
    borderColor: '#CCCCCC',
    borderRadius: RFValue(10),
    height: RFValue(56),
    // width: RFValue(327),
    padding: RFValue(10),
  },
  placeholder: {
    fontFamily: 'Avenir-Regular',
    color: '#CCCCCC',
    fontSize: RFValue(12),
  },
  input: {
    padding: 0,
    margin: 0,
    paddingTop: RFValue(5),
    fontFamily: 'Avenir-Regular',
    color: SecondaryColor,
    fontSize: RFValue(14),
    flex: 1,
    width: '100%',
  },
  icon: { color: '#CCCCCC' },
});
