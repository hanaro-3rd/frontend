import { StatusBar, useWindowDimensions } from "react-native";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const FIGMA_WINDOW_WIDTH = 390;
const FIGMA_WINDOW_HEIGHT = 844;

export function getStatusBarHeight() {
  //상태 바 크기 측정 => 전체화면 위의 상태 바를 포함시키지 않고 화면을 그리기 위해
  return StatusBar.currentHeight;
}

export function widthPercentage(width) {
  //피그마 픽셀을 현재 노트북 픽셀 너비로 변환
  const percentage = (width / FIGMA_WINDOW_WIDTH) * 100;

  return responsiveScreenWidth(percentage);
}

export function heightPercentage(height) {
  // // 피그마 픽셀을 현재 노트북 픽셀 크기로 변환

  const percentage = (height / FIGMA_WINDOW_HEIGHT) * 100;

  return responsiveScreenHeight(percentage);
}

export function fontPercentage(size) {
  // 폰트 크기도 피그마 크기에 맞게 변환
  const percentage = size * 0.12;

  return responsiveScreenFontSize(percentage);
}

export function phoneWidth() {
  //  전체 현재 디버깅 핸드폰 너비
  const { width } = useWindowDimensions();
  console.log(width);
  return width;
}
export function phoneHeight() {
  // 전체 현재 디버깅 핸드폰 높이
  const { height } = useWindowDimensions();
  console.log(height);
  return height;
}
