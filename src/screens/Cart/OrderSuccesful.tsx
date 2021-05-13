import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScreenBG, SecondaryColor } from '../../modules/colors';
import { CongratIcon } from '../../svg/CongratIcon';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';

export interface OrderSuccesfulProps {}

export interface OrderSuccesfulState {}

export default function OrderSuccesful(props: OrderSuccesfulProps) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={ScreenBG} />
      <CongratIcon />
      <RN.Text style={styles.congrat}>
        Congratulations your order is on it way
      </RN.Text>

      <ButtonPrimaryBig
        title={'Track Order'}
        containerStyles={{ width: '100%' }}
      />
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: RFValue(20),
  },
  content: {},
  contentContainerStyle: {},
  congrat: {
    fontSize: RFValue(24),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
    textAlign: 'center',
    marginVertical: RFValue(50),
    marginHorizontal: RFValue(50),
  },
});
