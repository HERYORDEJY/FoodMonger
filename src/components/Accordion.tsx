import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import Constants from 'expo-constants';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';
import { PrimaryColor, SecondaryColor } from '../modules/colors';

interface AccordionViewProps {
  headerComponent?: React.ReactNode;
  contentComponent?: React.ReactNode;
  arrowUpComponent?: React.ReactNode;
  arrowDownComponent?: React.ReactNode;
  multipleSelect?: boolean;
  containerStyles?: {};
}

interface AccordionViewState {
  activeSections: [];
  collapsed: boolean;
  multipleSelect: boolean;
}

export default class AccordionView extends Component<
  AccordionViewProps,
  AccordionViewState
> {
  constructor(props: AccordionViewProps) {
    super(props);

    this.state = {
      activeSections: [],
      collapsed: true,
      multipleSelect: false,
    };
  }

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  public render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={[styles.container, { ...this.props.containerStyles }]}>
        <Pressable onPress={this.toggleExpanded} style={styles.headerWrapper}>
          {this.props.headerComponent(
            this.state.collapsed ? SecondaryColor : PrimaryColor,
          )}
          {!this.props.arrowDownComponent ? (
            <NB.Icon
              style={styles.arrow}
              name={this.state.collapsed ? 'chevron-down' : 'chevron-up'}
              type={'Feather'}
            />
          ) : this.state.collapsed ? (
            this.props.arrowDownComponent
          ) : (
            this.props.arrowUpComponent
          )}
        </Pressable>
        <Collapsible collapsed={this.state.collapsed} align='center'>
          {this.props.contentComponent}
        </Collapsible>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    elevation: RFValue(2),
    margin: RFValue(1),
    backgroundColor: '#FFFFFF',
    borderRadius: RFValue(10),
    padding: RFValue(10),
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  arrow: { color: '#999999', fontSize: RFValue(20) },

  //
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
