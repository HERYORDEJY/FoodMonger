import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';
import * as RNPaper from 'react-native-paper';

import { PrimaryColor, ScreenBG, SecondaryColor } from '../modules/colors';
import { DefinedStringSchema } from 'yup/lib/string';
import * as I from '../svg/SettingsIcon';

const titleIcons = {
  'Account Settings': <I.ProfileIcon />,
  Favorite: <I.FavoriteIcon />,
  'Order History': <I.HistoryIcon />,
  Notification: <I.NotificationIcon />,
  'About the App': <I.AboutIcon />,
  FAQ: <I.InfoIcon />,
  'Rate Us': <I.StarIcon />,
  'Log Out': <I.PowerIcon />,
};

export interface SettingsLinkItemProps {
  title: string;
  iconName: string;
  notification?: boolean;
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

  // toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  onPress = () => {};

  public render() {
    const { title } = this.props;

    return (
      <RN.Pressable
        style={[styles.container]}
        onPress={this.onPress}
        disabled={this.props.title === 'notification'}
      >
        {titleIcons[`${title}`]}
        <RN.Text
          style={[
            styles.title,
            {
              color:
                this.props.title.toLowerCase() === 'log out'
                  ? PrimaryColor
                  : SecondaryColor,
            },
          ]}
        >
          {this.props.title}
        </RN.Text>
        {this.props.title.toLowerCase() === 'notification' ? (
          <RN.View
            style={[
              styles.switchWrapper,
              {
                backgroundColor: this.state.notification
                  ? PrimaryColor
                  : '#BBB',
                height: RFValue(24.42),
                width: RFValue(45 - 4),
              },
            ]}
          >
            <RN.Switch
              thumbColor={ScreenBG}
              trackColor={{ true: PrimaryColor, false: '#BBB' }}
              onValueChange={this.onToggleNotofiication}
              value={this.state.notification}
            />
          </RN.View>
        ) : (
          this.props.title.toLowerCase() !== 'log out' && (
            <NB.Icon
              style={[
                styles.rightIcon,
                {
                  // TODO Notifications toggle color not responding
                  color: SecondaryColor,
                },
              ]}
              name={'chevron-right'}
              type={'Feather'}
            />
          )
        )}
        {/* {this.props.title.toLowerCase() === 'notification' && <RN.Switch />} */}
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
    elevation: RFValue(1),
    height: RFValue(56),
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    margin: RFValue(1),
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
  switchWrapper: {
    backgroundColor: '#BBB',
    borderRadius: RFValue(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
