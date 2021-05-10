import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { SecondaryColor } from '../modules/colors';

export interface TextLinkProps {
  containerStyles?: {};
  title: string;
  titleStyle?: {};
  onPress: () => void;
}

export interface TextLinkState {}

export default class TextLink extends React.Component<
  TextLinkProps,
  TextLinkState
> {
  constructor(props: TextLinkProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <RN.Pressable
        style={[styles.container, { ...this.props.containerStyles }]}
        onPress={this.props.onPress}
      >
        <RN.Text style={styles.title}>{this.props.title}</RN.Text>
      </RN.Pressable>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: { alignItems: 'center', marginVertical: RFValue(20) },
  title: { fontSize: RFValue(16), color: SecondaryColor },
});
