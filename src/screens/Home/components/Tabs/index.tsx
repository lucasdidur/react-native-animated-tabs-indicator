import React from "react";

import { View, Dimensions, Animated } from "react-native";
import { TabData, Measure } from "../../../../types";
import Indicator from "../Indicator";
import Tab from "../Tab";
const { width, height } = Dimensions.get("screen");

type Props = {
  data: TabData[];
  scrollX: Animated.Value;
  onItemPress: (index: number) => void;
};

const Tabs = ({ data, scrollX, onItemPress }: Props) => {
  const [measures, setMeasures] = React.useState<Measure[]>([]);
  const containerRef = React.useRef<any>();

  React.useEffect(() => {
    const m: Measure[] = [];

    data.forEach((item) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x: number, y: number, width: number, height: number) => {
          m.push({ x, y, width, height });

          if (m.length === data.length) {
            setMeasures(m);
          }
          console.log(m);
        }
      );
    });
  }, []);

  return (
    <View style={{ position: "absolute", top: 100, width }}>
      <View
        ref={containerRef}
        style={{
          justifyContent: "space-evenly",
          flex: 1,
          flexDirection: "row"
        }}
      >
        {data.map((item, index) => {
          return (
            <Tab
              key={item.key}
              item={item}
              total={data.length}
              ref={item.ref}
              onItemPress={() => onItemPress(index)}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

export default Tabs;
