import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export function CartIcon(props) {
  const xml = `<svg width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.125 98.0834C42.5872 98.0834 44.5833 96.0873 44.5833 93.625C44.5833 91.1628 42.5872 89.1667 40.125 89.1667C37.6627 89.1667 35.6666 91.1628 35.6666 93.625C35.6666 96.0873 37.6627 98.0834 40.125 98.0834Z" stroke="#FF9139" stroke-width="8.91667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M89.1667 98.0834C91.629 98.0834 93.625 96.0873 93.625 93.625C93.625 91.1628 91.629 89.1667 89.1667 89.1667C86.7044 89.1667 84.7084 91.1628 84.7084 93.625C84.7084 96.0873 86.7044 98.0834 89.1667 98.0834Z" stroke="#FF9139" stroke-width="8.91667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.45837 4.45834H22.2917L34.24 64.1554C34.6477 66.208 35.7644 68.0518 37.3945 69.3641C39.0246 70.6763 41.0644 71.3734 43.1567 71.3333H86.4917C88.584 71.3734 90.6238 70.6763 92.2539 69.3641C93.884 68.0518 95.0007 66.208 95.4084 64.1554L102.542 26.75H26.75" stroke="#FF9139" stroke-width="8.91667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}
