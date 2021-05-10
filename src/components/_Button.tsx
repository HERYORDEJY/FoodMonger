import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export interface Props {
  title: string;
  onPress: () => void;
  activeBackgroudColor: string;
  inActiveBackgroudColor: string;
  disabled: boolean;
}

export default class _Button extends Component<Props> {
  render() {
    return (
      <TouchableOpacity>
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
