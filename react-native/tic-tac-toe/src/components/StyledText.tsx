import React from 'react';
import {Text, TextProps, StyleSheet, StyleProp, TextStyle} from 'react-native';

const Typography = {
  primary: 'Pretendard-Regular',
  thin: 'Pretendard-Thin',
  extraLight: 'Pretendard-ExtraLight',
  light: 'Pretendard-Light',
  medium: 'Pretendard-Medium',
  semiBold: 'Pretendard-SemiBold',
  bold: 'Pretendard-Bold',
  extraBold: 'Pretendard-ExtraBold',
  black: 'Pretendard-Black',
};

export default function StyledText(props: TextProps) {
  const {style, ...others} = props;
  if (!style) {
    return <Text {...props} />;
  }

  const {fontWeight} = StyleSheet.flatten(style);
  if (!fontWeight) {
    return <Text {...props} />;
  }

  let weightedFontFamily: StyleProp<TextStyle> | undefined;

  switch (fontWeight) {
    case '100':
      weightedFontFamily = styles.thin;
      break;
    case '200':
      weightedFontFamily = styles.extraLight;
      break;
    case '300':
      weightedFontFamily = styles.light;
      break;
    case '500':
      weightedFontFamily = styles.medium;
      break;
    case '600':
      weightedFontFamily = styles.semiBold;
      break;
    case 'bold':
    case '700':
      weightedFontFamily = styles.bold;
      break;
    case '800':
      weightedFontFamily = styles.extraBold;
      break;
    case '900':
      weightedFontFamily = styles.black;
      break;
    default:
      weightedFontFamily = styles.regular;
  }

  return (
    <Text style={[style, weightedFontFamily]} {...others} />
  );
}

const styles = StyleSheet.create({
  regular: {fontFamily: Typography.primary},
  thin: {fontFamily: Typography.thin},
  extraLight: {fontFamily: Typography.extraLight},
  light: {fontFamily: Typography.light},
  medium: {fontFamily: Typography.medium},
  semiBold: {fontFamily: Typography.semiBold},
  bold: {fontFamily: Typography.bold},
  extraBold: {fontFamily: Typography.extraBold},
  black: {fontFamily: Typography.black},
});
