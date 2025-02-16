import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import * as layers from "./layers.css";

globalFontFace("Pretendard", {
  src: ['url("/fonts/Pretendard-Regular.woff2") format("woff2")'],
  fontWeight: 400,
  fontDisplay: "swap",
});

globalFontFace("ProductSans", {
  src: ['url("/fonts/ProductSans-Regular.woff2") format("woff2")'],
  fontWeight: 400,
  fontDisplay: "swap",
});

globalStyle("body", {
  "@layer": {
    [layers.reset]: {
      fontFamily:
        "Pretendard, ProductSans, BlinkMacSystemFont, system-ui, Roboto, sans-serif",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
  },
});
