import React from 'react';
import Svg, {Circle, Rect} from 'react-native-svg';
import {Dimensions, Animated} from 'react-native';
const {width} = Dimensions.get('window');
const size = width - 32;
const strokeWidth = 50;
const radius = (size - strokeWidth) / 2;
const circumference = radius * 2 * Math.PI;
const {Value} = Animated;
// interface CircularProgressBarProps {
//   progress: typeof Value;
// }
export const CircularProgressBar = ({progress}) => {
  //   const a = interpolate(progress, {
  //     inputRange: [0, 1],
  //     outputRange: [0, Math.PI * 2],
  //   });
  return (
    <Svg height={size} width={size}>
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="blue"
        {...{strokeWidth}}
        fill="green"
        strokeDasharray={`${circumference} ${circumference}`}
      />
    </Svg>
  );
};
