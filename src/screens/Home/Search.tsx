import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import HomeSearchBar from '../../components/HomeSearchBar';
import { PrimaryColor, ScreenBG, SecondaryColor } from '../../modules/colors';
import { GridViewIcon, ListViewIcon } from '../../svg/ViewIcons';
import { specialCombosData } from '../../api/datas';
import SearchItemHorizontal from '../../components/SearchItemHorizontal';
import SpecialComboItem from './../../components/SpecialComboItem';

export interface SearchProps {}

export interface SearchState {}

export default function Search(props: SearchProps) {
  const [state, setState] = React.useState({
    GridColumnsValue: true,
    ButtonDefaultText: 'CHANGE TO GRIDVIEW',
  });

  const changeGridValueFunction = (GridColumnsValue, ButtonDefaultText) => {
    // if (state.GridColumnsValue === true) {
    //   setState({
    //     GridColumnsValue: false,
    //     ButtonDefaultText: 'CHANGE TO LISTVIEW',
    //   });
    // } else {
    //   setState({
    //     GridColumnsValue: true,
    //     ButtonDefaultText: 'CHANGE TO GRIDVIEW',
    //   });
    // }
    setState(() => ({ ...state, GridColumnsValue, ButtonDefaultText }));
  };

  const renderViewbar = () => (
    <RN.View style={styles.viewBarWrapper}>
      <RN.Text style={styles.resultCount}>6 Results Found</RN.Text>
      <RN.View style={styles.viewButtonsWrapper}>
        <RN.Pressable
          style={styles.viewButton}
          onPress={() => changeGridValueFunction(true, 'CHANGE TO GRIDVIEW')}
        >
          <GridViewIcon
            stroke={state.GridColumnsValue ? PrimaryColor : '#353534'}
          />
        </RN.Pressable>
        <RN.Pressable
          style={[styles.viewButton, { paddingRight: 0 }]}
          onPress={() => changeGridValueFunction(false, 'CHANGE TO LISTVIEW')}
        >
          <ListViewIcon
            stroke={!state.GridColumnsValue ? PrimaryColor : '#353534'}
          />
        </RN.Pressable>
      </RN.View>
    </RN.View>
  );

  const renderListHeader = () => (
    <RN.View style={{ marginVertical: RFValue(20) }}>
      <HomeSearchBar />
      {renderViewbar()}
    </RN.View>
  );

  const renderItem = (desc) =>
    !state.GridColumnsValue ? (
      <SearchItemHorizontal
        {...desc}
        addition={3}
        // {...name}
        // percentDiscount={12}
        // amount={231}
        // containerStyles={{
        //   paddingHorizontal: RFValue(5),
        //   marginBottom: RFValue(10),
        // }}
      />
    ) : (
      <SpecialComboItem
        {...desc}
        // containerStyle={{ marginBottom: RFValue(20) }}
      />
    );

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={ScreenBG} />
      <RN.FlatList
        style={styles.content}
        numColumns={state.GridColumnsValue ? 2 : 1}
        key={state.GridColumnsValue ? 'TWO COLUMN' : 'ONE COLUMN'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          { alignItems: state.GridColumnsValue ? 'center' : null },
        ]}
        data={specialCombosData}
        ListHeaderComponent={renderListHeader()}
        ListHeaderComponentStyle={{
          backgroundColor: ScreenBG,
          width: '100%',
        }}
        stickyHeaderIndices={[0]}
        renderItem={({ item, index }) => renderItem(item)}
      />
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {},
  content: { paddingHorizontal: RFValue(10) },
  contentContainerStyle: {
    // paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
    margin: 0,
    // alignItems: 'center',
  },
  viewBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resultCount: {
    fontSize: RFValue(14),
    color: SecondaryColor,
    fontFamily: 'Avenir-DemiBold',
  },
  viewButtonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flex: 0.25,
  },
  viewButton: { padding: RFValue(10) },
});
