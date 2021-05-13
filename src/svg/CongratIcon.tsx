import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export function CongratIcon(props) {
  const xml = `<svg width="344" height="317" viewBox="0 0 344 317" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="187.5" cy="130.5" r="76.5" fill="#F8F1FF"/>
<circle cx="187.5" cy="130.5" r="85.5" fill="#F4EBFF"/>
<circle cx="188" cy="131" r="66" fill="#FF9139"/>
<path d="M207.833 115.25L179.875 143.208L167.167 130.5" stroke="#F8F1FF" stroke-width="5.08333" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="110" cy="20" r="20" fill="#FF9139"/>
<circle cx="247.5" cy="20" r="6.5" fill="#FF9139"/>
<circle cx="295" cy="161" r="16" fill="#FF9139"/>
<circle cx="319" cy="232" r="8" fill="#FF9139"/>
<circle cx="336" cy="73" r="8" fill="#FF9139"/>
<circle cx="111" cy="266" r="8" fill="#FF9139"/>
<circle cx="48" cy="301" r="16" fill="#FF9139"/>
<circle cx="16" cy="143" r="16" fill="#FF9139"/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}
