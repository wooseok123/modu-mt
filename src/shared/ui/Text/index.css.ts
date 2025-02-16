import { createVar, style } from "@vanilla-extract/css";

export const styleVars = {
  fontSize: createVar(),
  fontFamily: createVar(),
  fontWeight: createVar(),
  color: createVar(),
};

export const textStyle = style({
  vars: {
    [styleVars.fontSize]: "14px",
    [styleVars.color]: "#000",
    [styleVars.fontWeight]: "400",
    [styleVars.fontFamily]: "Pretendard",
  },
  fontSize: styleVars.fontSize,
  fontFamily: styleVars.fontFamily,
  fontWeight: styleVars.fontWeight,
  color: styleVars.color,
});
