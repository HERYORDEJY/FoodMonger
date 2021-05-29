import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../components/NavigationBar';
import FAQItem from '../../components/FAQItem';
import { ScreenBG } from '../../modules/colors';
import { useNavigation } from '@react-navigation/native';

export interface FAQProps {}

export interface FAQState {}

export default function FAQ(props: FAQProps) {
  const navigation = useNavigation();

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={ScreenBG} />
      <NavigationBar title={'FAQ'} leftOnPress={() => navigation.goBack()} />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <FAQItem />
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { paddingHorizontal: RFValue(20), backgroundColor: ScreenBG },
  content: { paddingTop: RFValue(20) },
  contentContainerStyle: {},
});
