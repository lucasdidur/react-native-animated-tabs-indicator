import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  item: any;
  total: number;
  onItemPress: () => void;
};

const Tab = React.forwardRef<View, Props>(
  ({ item, total, onItemPress }, ref) => {
    return (
      <TouchableOpacity onPress={onItemPress}>
        <View ref={ref}>
          <Text
            style={{
              color: "white",
              fontSize: 84 / total,
              fontWeight: "bold",
              textTransform: "uppercase"
            }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);

export default Tab;
