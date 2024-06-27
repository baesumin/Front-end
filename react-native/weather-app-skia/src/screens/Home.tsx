import { StyleSheet } from "react-native";
import React from "react";
import HomeBackground from "../components/HomeBackground";
import WeatherInfo from "../components/section/WeatherInfo";
import ForecastSheet from "../components/sheet/ForecastSheet";
import WeatherTabBar from "../components/tabbar/WeatherTabBar";
import { ForecastSheetProvider } from "../context/ForecastSheetContext";

const Home = () => {
  return (
    <ForecastSheetProvider>
      <HomeBackground />
      <WeatherInfo />
      <ForecastSheet />
      <WeatherTabBar />
    </ForecastSheetProvider>
  );
};

export default Home;

const styles = StyleSheet.create({});
