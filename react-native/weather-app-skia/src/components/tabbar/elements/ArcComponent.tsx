import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Canvas, LinearGradient, Path, vec } from "@shopify/react-native-skia";

interface ArcComponentProps {
  height: number;
  width: number;
}

const ArcComponent = ({ height, width }: ArcComponentProps) => {
  const arcPath = `M 0 0 Q ${width / 2} ${height / 2} ${width} 0 L ${width} ${height}
                   L 0 ${height} Z`;
  const arcBorder = `M 0 0 Q ${width / 2} ${height / 2} ${width} 0`;
  return (
    <Canvas style={{ height, ...StyleSheet.absoluteFillObject }}>
      <Path path={arcPath}>
        <LinearGradient
          start={vec(width / 2, 0)}
          end={vec(width / 2, height)}
          colors={["rgba(58,58,106,1)", "rgba(37,36,76,1)"]}
        ></LinearGradient>
      </Path>
      <Path
        path={arcBorder}
        style={"stroke"}
        strokeWidth={0.5}
        color={"rgba(117,130,244,0.5)"}
      ></Path>
    </Canvas>
  );
};

export default ArcComponent;
