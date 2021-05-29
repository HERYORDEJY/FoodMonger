import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';
import { SecondaryColor } from '../modules/colors';

export interface Props {
  title?: string;
  noLeft?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  leftOnPress?: () => void;
  rightOnPress?: () => void;
  containerStyles?: RN.StyleProp<RN.ViewStyle>;
  navigation?: any;
}

export interface State {}

const backArrowWrapper: {} = {
  width: RFValue(56 - 8),
  height: RFValue(56 - 8),
  borderRadius: RFValue(10),
  backgroundColor: '#FFFFFF',
  alignItems: 'center',
  justifyContent: 'center',
  elevation: RFValue(2),
  margin: RFValue(0),
};

export default class NavigationBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  renderLeft = () => (
    <RN.Pressable
      disabled={this.props.leftComponent ? true : false}
      onPress={this.props.leftOnPress}
      style={!this.props.leftComponent && backArrowWrapper}
    >
      {/*  TODO  get the arrow icon from the Figma file */}
      {this.props.leftComponent ?? (
        <NB.Icon type={'Feather'} name={'chevron-left'} style={styles.icon} />
      )}
    </RN.Pressable>
  );

  renderBody = () => (
    <RN.View style={styles.bodyContainer}>
      <RN.Text style={styles.title}>{this.props.title}</RN.Text>
    </RN.View>
  );

  renderRight = () => (
    <RN.Pressable style={styles.rightContainer}>
      {this.props.rightComponent}
    </RN.Pressable>
  );

  public render() {
    return (
      <RN.View style={[styles.container, this.props.containerStyles]}>
        {!this.props.noLeft && this.renderLeft()}
        {this.renderBody()}
        {this.renderRight()}
      </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: RFValue(10),
    height: RFValue(56 - 8),
  },
  leftContainer: { flex: 0.3 },
  bodyContainer: { alignItems: 'center', flex: 1 },
  rightContainer: { flex: 0.3 },
  title: {
    fontFamily: 'Avenir-DemiBold',
    fontSize: RFValue(20),
    color: SecondaryColor,
    textAlign: 'center',
  },
  icon: {
    fontSize: RFValue(20),
    color: SecondaryColor,
  },
});
