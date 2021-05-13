import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../components/NavigationBar';
import OrderSummaryAddress from '../../components/OrderSummaryAddress';
import OrderSummaryPayment from '../../components/OrderSummaryPayment';
import MyCartInvoice from '../../components/MyCartInvoice';
import { ScreenBG } from '../../modules/colors';

export interface OrderSummaryProps {}

export interface OrderSummaryState {}

export default function OrderSummary(props: OrderSummaryProps) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={ScreenBG} />
      <NavigationBar title={'Order Summary'} />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <OrderSummaryAddress />
        <OrderSummaryPayment />
      </NB.Content>
      <MyCartInvoice />
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { backgroundColor: ScreenBG, paddingHorizontal: RFValue(20) },
  content: {},
  contentContainerStyle: {},
});
