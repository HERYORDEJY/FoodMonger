import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../components/NavigationBar';
import FAQItem from '../../components/FAQItem';

export interface FAQProps {}

export interface FAQState {}

export default function FAQ(props: FAQProps) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <NavigationBar title={'FAQ'} />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {/* <FAQItem /> */}
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { paddingHorizontal: RFValue(20) },
  content: {},
  contentContainerStyle: {},
});
