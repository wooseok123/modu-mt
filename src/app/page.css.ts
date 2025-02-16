import { style } from "@vanilla-extract/css";
import { MOBILE_MAX_WIDTH } from "@/shared/consts";

export const container = style({
  maxWidth: MOBILE_MAX_WIDTH,
  margin: "0 auto",
  minHeight: "100vh",
  backgroundColor: "#fff",
});
