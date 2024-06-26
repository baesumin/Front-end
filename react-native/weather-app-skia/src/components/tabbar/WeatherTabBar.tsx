import { StyleSheet } from "react-native";
import React from "react";
import ArcComponent from "./elements/ArcComponent";
import useApplicationDimensions from "../../hooks/useApplicationDimensions";
import TabbarItems from "./elements/TabbarItems";
import { BlurView } from "expo-blur";

const WeatherTabBar = () => {
  const TabbarHeight = 88;
  const { width, height } = useApplicationDimensions();
  return (
    <BlurView
      intensity={50}
      tint="dark"
      style={{
        height: TabbarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - TabbarHeight,
      }}
    >
      <ArcComponent height={TabbarHeight} width={width} />
      <TabbarItems />
    </BlurView>
  );
};

export default WeatherTabBar;

const styles = StyleSheet.create({});
