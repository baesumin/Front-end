import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import ForecastSheetBackground from "./ForecastSheetBackground";
import useApplicationDimensions from "../../hooks/useApplicationDimensions";
import ForecastControl from "./elements/ForecastControl";
import Separator from "./elements/Separator";
import { hourly, weekly } from "../../data/ForecastData";
import ForecastScroll from "../forecast/ForecastScroll";
import { ForecastType } from "../../models/Weather";
import AirQualityWidget from "../forecast/widgets/AirQualityWidget";
import UvIndexWidget from "../forecast/widgets/UvIndexWidget";
import WindWidget from "../forecast/widgets/WindWidget";
import SunriseWidget from "../forecast/widgets/SunriseWidget";
import RainFallWidget from "../forecast/widgets/RainFallWidget";
import FeelsLikeWidget from "../forecast/widgets/FeelsLikeWidget";
import HumidityWidget from "../forecast/widgets/HumidityWidget";
import VisibilityWidget from "../forecast/widgets/VisibilityWidget";
import PressureWidget from "../forecast/widgets/PressureWidget";

const ForecastSheet = () => {
  const { width, height } = useApplicationDimensions();
  const smalLWidgetSize = width / 2 - 20;
  const snapPoints = ["38.5%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const cornerRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = height * 0.17;
  const capsuleWidth = width * 0.15;
  const [selectedForecastType, setSelectedForecastType] = useState<ForecastType>(
    ForecastType.Hourly
  );
  return (
    <BottomSheet
      snapPoints={snapPoints}
      handleIndicatorStyle={{
        width: 48,
        height: 5,
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      backgroundComponent={() => (
        <ForecastSheetBackground
          width={width}
          height={firstSnapPoint}
          cornerRadius={cornerRadius}
        />
      )}
    >
      <>
        <ForecastControl onPress={(type) => setSelectedForecastType(type)} />
        <Separator width={width} height={3} />

        <BottomSheetScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 10 }}>
          <ForecastScroll
            capsuleWidth={capsuleWidth}
            capsuleHeight={capsuleHeight}
            capsuleRadius={capsuleRadius}
            forecasts={selectedForecastType === ForecastType.Hourly ? hourly : weekly}
          />
          <View style={{ flex: 1, paddingTop: 30, paddingBottom: 50 }}>
            <AirQualityWidget width={width - 30} height={150} />
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: 15,
                gap: 10,
              }}
            >
              <UvIndexWidget width={smalLWidgetSize} height={smalLWidgetSize} />
              <WindWidget width={smalLWidgetSize} height={smalLWidgetSize} />
              <SunriseWidget width={smalLWidgetSize} height={smalLWidgetSize} />
              <RainFallWidget width={smalLWidgetSize} height={smalLWidgetSize} />
              <FeelsLikeWidget width={smalLWidgetSize} height={smalLWidgetSize} />
              <HumidityWidget width={smalLWidgetSize} height={smalLWidgetSize} />
              <VisibilityWidget width={smalLWidgetSize} height={smalLWidgetSize} />
              <PressureWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            </View>
          </View>
        </BottomSheetScrollView>
      </>
    </BottomSheet>
  );
};

export default ForecastSheet;

const styles = StyleSheet.create({});
