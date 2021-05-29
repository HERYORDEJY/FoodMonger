import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { menuData } from '../../api/datas';
import { ScreenBG, SecondaryColor } from '../../modules/colors';
import NavigationBar from '../../components/NavigationBar';
import MenuItem from '../../components/MenuItem';

export interface MenuProps {}

export interface MenuState {}

export default function Menu(props: MenuProps) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={ScreenBG} />
      <NavigationBar
        leftComponent={<RN.Text style={styles.screenTitle}>Menu</RN.Text>}
      />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        {menuData.map(({ id, title, imageSource }, index) => (
          <MenuItem title={title} imageSource={imageSource} key={id + index} />
        ))}
        {/* <RN.FlatList data={menuData} /> */}
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    padding: RFValue(20),
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: ScreenBG,
  },
  content: {},
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: RFValue(20),
  },
  screenTitle: {
    fontSize: RFValue(20),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
  },
});
