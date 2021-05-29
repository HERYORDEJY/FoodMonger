import * as React from 'react';
import * as RN from 'react-native';
import DialogueBox from './DialogueBox';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, SecondaryColor } from '../modules/colors';
import ButtonPrimaryBig from './ButtonPrimaryBig';
import { CheckCircleIcon } from '../svg/EllipseIcon';

interface Props {
  visible: boolean;
}

interface State {
  visible: boolean;
}

export default class DeliverySuccessfulModal extends React.PureComponent<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = { visible: false };
  }

  showDialog = () => this.setState({ visible: true });

  hideDialog = () => this.setState({ visible: false });

  public render(): React.ReactNode {
    return (
      <DialogueBox visible={this.props.visible && this.state.visible}>
        <RN.View style={styles.iconWrapper}>
          <CheckCircleIcon />
        </RN.View>
        <RN.Text style={styles.title}>
          Delivery time has been successfully set and order is now in cart
        </RN.Text>
        <RN.View style={styles.confrimButtonWrapper}>
          <ButtonPrimaryBig
            onPress={this.hideDialog}
            title={'Go back home'}
            titleStyles={{ color: PrimaryColor }}
            containerStyles={{
              backgroundColor: '#FFECDC',
              flex: 1,
              marginRight: RFValue(15),
            }}
          />
          <ButtonPrimaryBig
            title={'Checkout'}
            containerStyles={{ flex: 1, marginLeft: RFValue(15) }}
            // onPress={hideConfirmDialogue}
          />
        </RN.View>
      </DialogueBox>
    );
  }
}

const styles = RN.StyleSheet.create({
  confrimButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RFValue(20),
  },
  iconWrapper: { paddingBottom: RFValue(20), alignItems: 'center' },
  title: {
    fontSize: RFValue(14),
    fontFamily: 'Avenir-DemiBold',
    textAlign: 'center',
    paddingHorizontal: RFValue(20),

    color: SecondaryColor,
  },
});
