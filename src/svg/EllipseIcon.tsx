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

export function CheckCircleIcon(props) {
  const xml = `<svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.3" cx="43.5" cy="43.5" r="43.0857" fill="#FF9139" stroke="white" stroke-width="0.828571"/>
<ellipse cx="43.4233" cy="43.2298" rx="33.4805" ry="33.2869" fill="#FF9139"/>
<path d="M53.4634 36.4572L41.7469 50.5113L33.1429 42.9771" stroke="white" stroke-width="4.81816" stroke-linecap="round" stroke-linejoin="round"/>
</svg>




`;
  return <SvgXml {...props} xml={xml} />;
}
