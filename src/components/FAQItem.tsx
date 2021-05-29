import * as React from 'react';
import * as RN from 'react-native';

import { List } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import Collapsible from 'react-native-collapsible';

import { PrimaryColor } from '../modules/colors';
import AccordionView from './Accordion';

export interface FAQItemProps {}

export interface FAQItemState {}

// export default class FAQItem extends React.Component<
//   FAQItemProps,
//   FAQItemState
// > {
//   constructor(props: FAQItemProps) {
//     super(props);

//     this.state = {};
//   }

//   public render() {
//     return (
//       <RN.View style={[styles.container]}>
// <RN.View style={styles.questionWrapper}>
//   <RN.Text style={styles.question}>How to order on Food Monger</RN.Text>
// </RN.View>
{
  /* <RN.View style={styles.answerWrapper}>
  <RN.Text style={styles.answer}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
    sem quis integer nec elit, pretium sit. Blandit gravida nulla nibh
    eget mattis nibh id. Adipiscing massa sed at vitae tortor.
  </RN.Text>
</RN.View> */
}
//       </RN.View>
//     );
//   }
// }

const FAQItem = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <RN.View style={[styles.wrapper]}>
        <AccordionView
          containerStyles={[styles.container]}
          headerComponent={(titleColor) => (
            <RN.View style={styles.questionWrapper}>
              <RN.Text style={[styles.question, { color: titleColor }]}>
                How to order on Food Monger
              </RN.Text>
            </RN.View>
          )}
          contentComponent={
            <RN.View style={styles.answerWrapper}>
              <RN.Text style={styles.answer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pharetra sem quis integer nec elit, pretium sit. Blandit gravida
                nulla nibh eget mattis nibh id. Adipiscing massa sed at vitae
                tortor.
              </RN.Text>
            </RN.View>
          }
        />
      </RN.View>
      <RN.View style={[styles.wrapper]}>
        <AccordionView
          containerStyles={[styles.container]}
          headerComponent={(titleColor) => (
            <RN.View style={styles.questionWrapper}>
              <RN.Text style={[styles.question, { color: titleColor }]}>
                How to order on Food Monger
              </RN.Text>
            </RN.View>
          )}
          contentComponent={
            <RN.View style={styles.answerWrapper}>
              <RN.Text style={styles.answer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pharetra sem quis integer nec elit, pretium sit. Blandit gravida
                nulla nibh eget mattis nibh id. Adipiscing massa sed at vitae
                tortor.
              </RN.Text>
            </RN.View>
          }
        />
      </RN.View>
    </>
  );
};

export default FAQItem;

const styles = RN.StyleSheet.create({
  wrapper: {
    marginBottom: RFValue(20),
    // height: RFValue(137),
    // padding: RFValue(10),
  },
  container: {},
  questionWrapper: { marginVertical: RFValue(10) },
  question: {
    color: PrimaryColor,
    fontFamily: 'Avenir-DemiBold',
    fontSize: RFValue(14),
  },
  answerWrapper: { marginVertical: RFValue(10) },
  answer: {
    color: '#999999',
    fontFamily: 'Avenir-Regular',
    fontSize: RFValue(12),
    lineHeight: RFValue(20),
    letterSpacing: RFValue(1),
  },
});
