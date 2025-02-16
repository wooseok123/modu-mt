import { style } from "@vanilla-extract/css";
import { createVar } from "@vanilla-extract/css";

export const DEFAULT_STYLES = {
  padding: "1rem",
  borderRadius: "0",
  border: "none",
} as const;

export const styleVars = {
  padding: createVar(),
  borderRadius: createVar(),
  border: createVar(),
};

export const containerStyle = style({
  vars: {
    [styleVars.padding]: DEFAULT_STYLES.padding,
    [styleVars.borderRadius]: DEFAULT_STYLES.borderRadius,
    [styleVars.border]: DEFAULT_STYLES.border,
  },
  padding: styleVars.padding,
  borderRadius: styleVars.borderRadius,
  border: styleVars.border,
});
