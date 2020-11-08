import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Dimensions, Image, Animated } from "react-native";
import { data } from "../../data";
import Tabs from "./components/Tabs";
const { width, height } = Dimensions.get("screen");

export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ref = React.useRef<any>();

  const onItemPress = (itemIndex: number) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        ref={ref}
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.image }}
                style={{ flex: 1, resizeMode: "cover" }}
              />
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  { backgroundColor: "rgba(0,0,0,0.3)" }
                ]}
              />
            </View>
          );
        }}
      />
      <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
