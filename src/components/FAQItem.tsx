// import * as React from 'react';
// import * as RN from 'react-native';

// import { RFValue } from 'react-native-responsive-fontsize';
// import Collapsible from 'react-native-collapsible';

// import { PrimaryColor } from '../modules/colors';

// export interface FAQItemProps {}

// export interface FAQItemState {}

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
//         <RN.View style={styles.questionWrapper}>
//           <RN.Text style={styles.question}>How to order on Food Monger</RN.Text>
//         </RN.View>
//         <RN.View style={styles.answerWrapper}>
//           <RN.Text style={styles.answer}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
//             sem quis integer nec elit, pretium sit. Blandit gravida nulla nibh
//             eget mattis nibh id. Adipiscing massa sed at vitae tortor.
//           </RN.Text>
//         </RN.View>
//       </RN.View>
//     );
//   }
// }

// const styles = RN.StyleSheet.create({
//   container: {
//     height: RFValue(137),
//     borderRadius: RFValue(5),
//     padding: RFValue(10),
//   },
//   questionWrapper: {},
//   question: {
//     color: PrimaryColor,
//     fontFamily: 'Avenir-DemiGold',
//     fontSize: RFValue(14),
//   },
//   answerWrapper: {},
//   answer: {
//     color: '#999999',
//     fontFamily: 'Avenir-Regular',
//     fontSize: RFValue(12),
//   },
// });

// import React, { Component } from 'react';
// import {
//   Switch,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import Constants from 'expo-constants';
// import * as Animatable from 'react-native-animatable';
// import Collapsible from 'react-native-collapsible';
// import Accordion from 'react-native-collapsible/Accordion';

// const BACON_IPSUM =
//   'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

// const CONTENT = [
//   {
//     title: 'First',
//     content: BACON_IPSUM,
//   },
//   {
//     title: 'Second',
//     content: BACON_IPSUM,
//   },
//   {
//     title: 'Third',
//     content: BACON_IPSUM,
//   },
//   {
//     title: 'Fourth',
//     content: BACON_IPSUM,
//   },
//   {
//     title: 'Fifth',
//     content: BACON_IPSUM,
//   },
// ];

// const SELECTORS = [
//   {
//     title: 'First',
//     value: 0,
//   },
//   {
//     title: 'Third',
//     value: 2,
//   },
//   {
//     title: 'None',
//   },
// ];

// export default class App extends Component {
//   state = {
//     activeSections: [],
//     collapsed: true,
//     multipleSelect: false,
//   };

//   toggleExpanded = () => {
//     this.setState({ collapsed: !this.state.collapsed });
//   };

//   setSections = (sections) => {
//     this.setState({
//       activeSections: sections.includes(undefined) ? [] : sections,
//     });
//   };

//   renderHeader = (section, _, isActive) => {
//     return (
//       <Animatable.View
//         duration={400}
//         style={[styles.header, isActive ? styles.active : styles.inactive]}
//         transition='backgroundColor'
//       >
//         <Text style={styles.headerText}>{section.title}</Text>
//       </Animatable.View>
//     );
//   };

//   renderContent(section, _, isActive) {
//     return (
//       <Animatable.View
//         duration={400}
//         style={[styles.content, isActive ? styles.active : styles.inactive]}
//         transition='backgroundColor'
//       >
//         <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
//           {section.content}
//         </Animatable.Text>
//       </Animatable.View>
//     );
//   }

//   render() {
//     const { multipleSelect, activeSections } = this.state;

//     return (
//       <View style={styles.container}>
//         <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
//           <Text style={styles.title}>Accordion Example</Text>

//           <View style={styles.multipleToggle}>
//             <Text style={styles.multipleToggle__title}>Multiple Select?</Text>
//             <Switch
//               value={multipleSelect}
//               onValueChange={(a) => this.setState({ multipleSelect: a })}
//             />
//           </View>

//           <View style={styles.selectors}>
//             <Text style={styles.selectTitle}>Select:</Text>

//             {SELECTORS.map((selector) => (
//               <TouchableOpacity
//                 key={selector.title}
//                 onPress={() => this.setSections([selector.value])}
//               >
//                 <View style={styles.selector}>
//                   <Text
//                     style={
//                       activeSections.includes(selector.value) &&
//                       styles.activeSelector
//                     }
//                   >
//                     {selector.title}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <TouchableOpacity onPress={this.toggleExpanded}>
//             <View style={styles.header}>
//               <Text style={styles.headerText}>Single Collapsible</Text>
//             </View>
//           </TouchableOpacity>
//           <Collapsible collapsed={this.state.collapsed} align='center'>
//             <View style={styles.content}>
//               <Text>
//                 Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
//                 ribs
//               </Text>
//             </View>
//           </Collapsible>
//           <Accordion
//             activeSections={activeSections}
//             sections={CONTENT}
//             touchableComponent={TouchableOpacity}
//             expandMultiple={multipleSelect}
//             renderHeader={this.renderHeader}
//             renderContent={this.renderContent}
//             duration={400}
//             onChange={this.setSections}
//             renderAsFlatList={false}
//           />
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//     paddingTop: Constants.statusBarHeight,
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 22,
//     fontWeight: '300',
//     marginBottom: 20,
//   },
//   header: {
//     backgroundColor: '#F5FCFF',
//     padding: 10,
//   },
//   headerText: {
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   content: {
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   active: {
//     backgroundColor: 'rgba(255,255,255,1)',
//   },
//   inactive: {
//     backgroundColor: 'rgba(245,252,255,1)',
//   },
//   selectors: {
//     marginBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   selector: {
//     backgroundColor: '#F5FCFF',
//     padding: 10,
//   },
//   activeSelector: {
//     fontWeight: 'bold',
//   },
//   selectTitle: {
//     fontSize: 14,
//     fontWeight: '500',
//     padding: 10,
//   },
//   multipleToggle: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 30,
//     alignItems: 'center',
//   },
//   multipleToggle__title: {
//     fontSize: 16,
//     marginRight: 8,
//   },
// });

import * as React from 'react';
import { List } from 'react-native-paper';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title='Accordions'>
      <List.Accordion
        title='Uncontrolled Accordion'
        left={(props) => <List.Icon {...props} icon='folder' />}
      >
        <List.Item title='First item' />
        <List.Item title='Second item' />
      </List.Accordion>

      <List.Accordion
        title='Controlled Accordion'
        left={(props) => <List.Icon {...props} icon='folder' />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title='First item' />
        <List.Item title='Second item' />
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;
