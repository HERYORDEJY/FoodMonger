import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../components/NavigationBar';
import OrderHistoryItem from '../../components/OrderHistoryItem';
import { CalendarIcon } from '../../svg/CalendarIcon';
import { PrimaryColor, SecondaryColor } from '../../modules/colors';

export interface OrderHistoryProps {}

export interface OrderHistoryState {}

export default function OrderHistory(props: OrderHistoryProps) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar title={'Order History'} />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <RN.View style={styles.iconWrapper}>
          <CalendarIcon style={styles.icon} />
        </RN.View>

        <RN.View style={styles.descWrapper}>
          <RN.Text style={styles.title}>No History Yet</RN.Text>
          <RN.Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            arcu ut aliquet et cursus.
          </RN.Text>
        </RN.View>
      </NB.Content>
      <OrderHistoryItem orderId={'1234567'} status={'Pending'} />
      <OrderHistoryItem orderId={'1234567'} status={'Canceled'} />
      <OrderHistoryItem orderId={'1234567'} status={'delivered'} />
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { padding: RFValue(20), paddingTop: RFValue(30) },
  content: {},
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    backgroundColor: PrimaryColor + '18',
    width: RFValue(255),
    height: RFValue(255),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(255 / 2),
    marginBottom: RFValue(20),
  },
  icon: {},
  descWrapper: { marginTop: RFValue(20) },
  title: {
    fontSize: RFValue(18),
    color: '#444444',
    textAlign: 'center',
    fontFamily: 'Avenir-DemiBold',
    marginBottom: RFValue(10),
  },
  subtitle: {
    fontSize: RFValue(14),
    color: '#666666',
    textAlign: 'center',
    fontFamily: 'Avenir-Regular',
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(20),
    letterSpacing: 1,
    lineHeight: 25,
  },
});
