import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export function PaginationIcon(props) {
  const xml = `<svg width="22" height="5" viewBox="0 0 22 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="22" height="5" rx="2.5" fill=${props.fill ?? '#EFEFEF'}/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}
