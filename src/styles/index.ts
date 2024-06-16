import fonts from "./fonts";
import colors from "./colors";
import spacings from "./spacings";
import sizes from "./sizes";
import { EdgeInsets } from "react-native-safe-area-context";
import { ScaledSize } from "react-native";

export type TypeTheme = {
  fonts: typeof fonts;
  colors: typeof colors;
  spacings: typeof spacings;
  sizes: typeof sizes;
  insets: EdgeInsets;
  dimensions: ScaledSize;
};

const insets: EdgeInsets = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};
const dimensions: ScaledSize = {
  width: 0,
  height: 0,
  scale: 0,
  fontScale: 0,
};

const theme: TypeTheme = { fonts, colors, spacings, sizes, insets, dimensions };

export type TPropWithTheme<T> = { theme: TypeTheme } & T;

export default theme;
