import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, SecondaryColor } from '../modules/colors';
import { FilterIcon } from '../svg/FilterIcon';
import { SearchIcon } from '../svg/SearchIcon';

export interface HomeSearchBarProps {
  searchResult?: boolean;
}

export interface HomeSearchBarState {}

export default class HomeSearchBar extends React.Component<
  HomeSearchBarProps,
  HomeSearchBarState
> {
  constructor(props: HomeSearchBarProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <RN.View style={[styles.container]}>
        {/* // TODO input shadow wrapper not complete */}
        <RN.View style={styles.inputWrapper}>
          {this.props.searchResult && <SearchIcon />}
          <RN.TextInput
            placeholder={'What do yo want to eat'}
            placeholderTextColor={SecondaryColor}
            style={[
              styles.textInput,
              { marginLeft: this.props.searchResult ? RFValue(10) : 0 },
            ]}
          />
        </RN.View>
        <RN.Pressable style={styles.iconWrapper}>
          <FilterIcon />
        </RN.Pressable>
      </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    height: RFValue(56 - 8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: RFValue(20),
    // backgroundColor: '#FFFF',
  },
  inputWrapper: {
    height: RFValue(56 - 8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: RFValue(10),
    borderWidth: RFValue(0.3),
    paddingHorizontal: RFValue(10),
    marginRight: RFValue(10),
    backgroundColor: '#FFFF',
    elevation: RFValue(2),
    flex: 1,
  },
  textInput: {
    fontSize: RFValue(14),
    color: SecondaryColor,
    marginLeft: RFValue(10),
    flex: 1,
  },
  iconWrapper: {
    height: RFValue(56 - 8),
    width: RFValue(56 - 8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PrimaryColor,
    borderRadius: RFValue(10),
  },
});
