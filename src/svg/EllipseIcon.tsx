import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export function CircleComboIcon(props) {
  const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="9.5" stroke="#FF9139"/>
<circle cx="10" cy="10" r="5" fill="#FF9139"/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}

export function CircleOutlineIcon(props) {
  const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="9.5" stroke="#FF9139"/>
</svg>


`;
  return <SvgXml {...props} xml={xml} />;
}

export function CircleFillIcon(props) {
  const xml = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="5" r="5" fill="#FF9139"/>
</svg>



`;
  return <SvgXml {...props} xml={xml} />;
}
