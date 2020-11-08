import React from "react";

import { Animated, Dimensions } from "react-native";
import { data } from "../../../../data";
import { Measure } from "../../../../types";
const { width, height } = Dimensions.get("screen");

type Props = {
  measures: Measure[];
  scrollX: Animated.Value;
};

const Indicator = ({ measures, scrollX }: Props) => {
  const inputRange = data.map((_, i) => i * width);

  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width)
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x)
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        height: 4,
        width: indicatorWidth,
        left: 0,
        backgroundColor: "white",
        bottom: -10,
        transform: [
          {
            translateX
          }
        ]
      }}
    />
  );
};

export default Indicator;
