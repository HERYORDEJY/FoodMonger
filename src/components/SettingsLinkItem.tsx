import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';
import { PrimaryColor, SecondaryColor } from '../modules/colors';
import { DefinedStringSchema } from 'yup/lib/string';

export interface SettingsLinkItemProps {
  title: string;
  iconName: string;
  notification: boolean;
}

export interface SettingsLinkItemState {
  notification: boolean;
}

export default class SettingsLinkItem extends React.Component<
  SettingsLinkItemProps,
  SettingsLinkItemState
> {
  constructor(props: SettingsLinkItemProps) {
    super(props);

    this.state = { notification: false };
  }

  onToggleNotofiication = () =>
    this.setState(() => {
      return { ...this.state, notification: !this.state.notification };
    });

  onPress = () => this.onToggleNotofiication();

  public render() {
    return (
      <RN.Pressable style={[styles.container]} onPress={this.onPress}>
        <NB.Icon
          style={styles.leftIcon}
          name={this.props.iconName}
          type={'Feather'}
        />
        <RN.Text style={styles.title}>{this.props.title}</RN.Text>
        {this.props.title.toLowerCase() !== 'log out' && (
          <NB.Icon
            style={[
              styles.rightIcon,
              {
                // TODO Notifications toggle color not responding
                color:
                  this.props.title === 'notification'
                    ? this.state.notification
                      ? PrimaryColor
                      : SecondaryColor
                    : SecondaryColor,
              },
            ]}
            name={
              this.props.title.toLowerCase() === 'notification'
                ? this.state.notification
                  ? 'toggle-right'
                  : 'toggle-left'
                : 'chevron-right'
            }
            type={'Feather'}
          />
        )}
      </RN.Pressable>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(10),
    backgroundColor: '#FFFFFF',
    elevation: RFValue(2),
    height: RFValue(56),
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
  },
  leftIcon: { color: SecondaryColor, fontSize: RFValue(20) },
  rightIcon: { color: SecondaryColor, fontSize: RFValue(20) },
  title: {
    color: SecondaryColor,
    fontSize: RFValue(14),
    fontFamily: 'Avenir-Regular',
    flex: 1,
    textAlign: 'left',
    paddingLeft: RFValue(20),
  },
});
