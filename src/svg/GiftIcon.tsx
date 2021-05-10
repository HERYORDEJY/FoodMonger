import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export function GiftIcon(props) {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V12" stroke="#FF9139" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 7H4C2.89543 7 2 7.89543 2 9V10C2 11.1046 2.89543 12 4 12H20C21.1046 12 22 11.1046 22 10V9C22 7.89543 21.1046 7 20 7Z" stroke="#FF9139" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22V7" stroke="#FF9139" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="#FF9139" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="#FF9139" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  return <SvgXml {...props} xml={xml} />;
}
