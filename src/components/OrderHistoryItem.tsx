import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import {
  ErrorColor,
  PrimaryColor,
  SecondaryColor,
  SuccessColor,
} from '../modules/colors';
import { GiftIcon } from '../svg/GiftIcon';

export interface OrderHistoryItemProps {
  status: string;
  orderId: string;
}

export interface OrderHistoryItemState {}

export default class OrderHistoryItem extends React.Component<
  OrderHistoryItemProps,
  OrderHistoryItemState
> {
  constructor(props: OrderHistoryItemProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const statusColor = {
      pending: PrimaryColor,
      delivered: SuccessColor,
      canceled: ErrorColor,
    };

    return (
      <RN.View style={[styles.container]}>
        <RN.View style={styles.iconWrapper}>
          <GiftIcon style={styles.icon} />
        </RN.View>
        <RN.View style={styles.descWrapper}>
          <RN.View style={styles.statusWrapper}>
            <RN.Text style={styles.key}>Status: </RN.Text>
            <RN.Text
              style={[
                styles.value,
                {
                  color: statusColor[`${this.props.status.toLowerCase()}`],
                  fontFamily: 'Avenir-DemiBold',
                },
              ]}
            >
              {this.props.status}
            </RN.Text>
          </RN.View>
          <RN.View style={styles.orderIdWrapper}>
            <RN.Text style={styles.key}>Order ID: </RN.Text>
            <RN.Text style={[styles.value, { color: SecondaryColor }]}>
              {this.props.orderId}
            </RN.Text>
          </RN.View>
        </RN.View>
      </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    height: RFValue(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconWrapper: {
    marginRight: RFValue(20),
    height: RFValue(45),
    width: RFValue(45),
    borderRadius: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PrimaryColor + 17,
  },
  icon: {},
  descWrapper: {},
  statusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: RFValue(2.5),
  },
  orderIdWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: RFValue(2.5),
  },
  key: {},
  value: { fontFamily: 'Avenir-Medium', textTransform: 'capitalize' },
});
