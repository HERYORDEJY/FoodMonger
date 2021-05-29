import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Swiper from 'react-native-swiper';
import { _windowWidth } from '../modules/dimension';
import { PaginationIcon } from '../svg/PaginationIcon';
import { PrimaryColor, SecondaryColor } from '../modules/colors';

export interface SwiperProps {
  children?: React.ReactNode;
  data?: object[];
  autoplay?: boolean;
  autoplayDelay?: number;
  showPagination?: boolean;
  index?: number;
  contentContainerStyle?: {};
  horizontal?: boolean;
}

export interface SwiperState {
  currentIndex: number;
}

export default class SwiperBox extends React.Component<
  SwiperProps,
  SwiperState
> {
  private scrollRef: React.RefObject<unknown>;
  constructor(props: SwiperProps) {
    super(props);

    this.state = { currentIndex: 0 };

    this.scrollRef = React.createRef();
  }

  getIndex = (index: number) =>
    this.setState(() => ({ ...this.state, currentIndex: index }));

  handleOnScroll = (event) =>
    //calculate screenIndex by contentOffset and screen width
    this.setState({
      ...this.state,
      currentIndex: parseInt(
        String(event.nativeEvent.contentOffset.x / RFValue(309 - 8)),
        // event.nativeEvent.contentOffset.x / RN.Dimensions.get('window').width,
      ),
    });

  // handleClick = (number) => {
  //   this.scrollRef.current.ScrollTo({
  //     y: 100 * number,
  //     animated: true,
  //   });
  // };

  renderPagination = () => (
    <RN.View style={styles.paginationWrapper}>
      {this.props.data.map((d, index) => (
        <PaginationIcon
          style={styles.icon}
          fill={this.state.currentIndex === index ? PrimaryColor : '#FEFEFE'}
          key={index.toString()}
        />
      ))}
    </RN.View>
  );

  public render() {
    return (
      <RN.View style={[styles.container]}>
        <RN.ScrollView
          {...this.props}
          // ref={this.scrollRef}
          onScroll={(e) => this.handleOnScroll(e)}
          scrollEventThrottle={16}
          snapToInterval={RFValue(309 - 8) + 15}
          showsHorizontalScrollIndicator={false}
          // autoplay
          // autoplayDelay={2}
          // autoplayLoop
          // index={2}
          // showPagination
          // data={}
          // showPagination
          // PaginationComponent={() => this.renderPagination()}
          pagingEnabled={true}
          // getIndex={index: number => (this.getIndex(index))}
        >
          {this.props.children}
        </RN.ScrollView>
        {this.renderPagination()}
      </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {},
  paginationWrapper: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: RFValue(60),
  },
  icon: { marginHorizontal: RFValue(5) },
});
