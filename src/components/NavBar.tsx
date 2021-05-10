
import * as React from 'react';
import * as RN from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

export interface NavBarProps {
}

export interface NavBarState {
}

export default class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <RN.View style={[styles.container]}>
        <RN.Text>This is the NavBar Component </RN.Text>
      </RN.View>
    );
  }
}


const styles = RN.StyleSheet.create({
container: { },
})
