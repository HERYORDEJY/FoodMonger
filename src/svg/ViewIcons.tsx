import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export function GridViewIcon(props) {
  let stroke_ = props.stroke ?? '#353534';

  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M8 3H5C3.89543 3 3 3.89543 3 5V8C3 9.10457 3.89543 10 5 10H8C9.10457 10 10 9.10457 10 8V5C10 3.89543 9.10457 3 8 3Z" stroke=${stroke_} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 3H16C14.8954 3 14 3.89543 14 5V8C14 9.10457 14.8954 10 16 10H19C20.1046 10 21 9.10457 21 8V5C21 3.89543 20.1046 3 19 3Z" stroke=${stroke_} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 14H16C14.8954 14 14 14.8954 14 16V19C14 20.1046 14.8954 21 16 21H19C20.1046 21 21 20.1046 21 19V16C21 14.8954 20.1046 14 19 14Z" stroke=${stroke_} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 14H5C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21H8C9.10457 21 10 20.1046 10 19V16C10 14.8954 9.10457 14 8 14Z" stroke=${stroke_} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}

export function ListViewIcon(props) {
  let stroke_ = props.stroke ?? '#FF9139';

  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 6H21" stroke=${stroke_} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12H21" stroke=${stroke_} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 18H21" stroke=${stroke_} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 6H3.01" stroke=${stroke_} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H3.01" stroke=${stroke_} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 18H3.01" stroke=${stroke_} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



`;
  return <SvgXml {...props} xml={xml} />;
}
