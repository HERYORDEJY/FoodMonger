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
}

export interface State {}

const backArrowWrapper: {} = {
  width: RFValue(56 - 8),
  height: RFValue(56 - 8),
  borderRadius: RFValue(10),
  backgroundColor: '#FFFFFF',
  alignItems: 'center',
  justifyContent: 'center',
  elevation: RFValue(0.5),
};

export default class NavigationBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  renderLeft = () => (
    <RN.Pressable style={!this.props.leftComponent && backArrowWrapper}>
      {/* // TODO  get the arrow icon from the Figma file */}
      {this.props.leftComponent ?? (
        <NB.Icon type={'Feather'} name={'chevron-left'} style={styles.icon} />
      )}
    </RN.Pressable>
  );

  renderBody = () => (
    <RN.View>
      <RN.Text style={styles.title}>{this.props.title}</RN.Text>
    </RN.View>
  );

  renderRight = () => <RN.Pressable>{this.props.rightComponent}</RN.Pressable>;

  public render() {
    return (
      <RN.View style={styles.container}>
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
  leftContainer: {},
  bodyContainer: {},
  rightContainer: {},
  title: {
    fontFamily: 'Avenir-Bold',
    fontSize: RFValue(24),
    color: SecondaryColor,
  },
  icon: {
    fontSize: RFValue(20),
    color: SecondaryColor,
  },
});
