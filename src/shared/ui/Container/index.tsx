import { ReactNode } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { containerStyle, styleVars, DEFAULT_STYLES } from "./index.css";

interface ContainerProps {
  children: ReactNode;
  padding?: string;
  borderRadius?: string;
  border?: string;
}

export function Container({
  children,
  padding = DEFAULT_STYLES.padding,
  borderRadius = DEFAULT_STYLES.borderRadius,
  border = DEFAULT_STYLES.border,
}: ContainerProps) {
  return (
    <div
      className={containerStyle}
      style={assignInlineVars({
        [styleVars.padding]: padding,
        [styleVars.borderRadius]: borderRadius,
        [styleVars.border]: border,
      })}
    >
      {children}
    </div>
  );
}
