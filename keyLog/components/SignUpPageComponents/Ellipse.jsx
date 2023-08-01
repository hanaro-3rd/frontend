import React from 'react';
import Svg, { Circle } from 'react-native-svg';

const Ellipse = ({ fill = '#B0B8C1' }) => (
  <Svg width='15' height='15' viewBox='0 0 15 15' fill='none'>
    <Circle cx='7.5' cy='7.5' r='7.5' fill={fill} />
  </Svg>
);

export default Ellipse;
