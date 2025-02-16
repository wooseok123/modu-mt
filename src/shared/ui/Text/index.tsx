import { JSX } from "react";
import { styleVars, textStyle } from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const DEFAULT_STYLES = {
  fontSize: "14px",
  color: "#000",
  fontWeight: 400,
  as: "span",
  fontFamily: "Pretendard",
} as const;

type TextElement = Extract<
  keyof JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
>;

interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, "color"> {
  as?: TextElement;
  children: React.ReactNode;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: number;
  color?: string;
}

export const Text = ({
  children,
  as = DEFAULT_STYLES.as,
  fontSize = DEFAULT_STYLES.fontSize,
  fontFamily = DEFAULT_STYLES.fontFamily,
  fontWeight = DEFAULT_STYLES.fontWeight,
  color = DEFAULT_STYLES.color,
  ...rest
}: TextProps) => {
  const Component = as;
  return (
    <Component
      className={textStyle}
      style={assignInlineVars({
        [styleVars.fontSize]: fontSize,
        [styleVars.fontFamily]: fontFamily,
        [styleVars.fontWeight]: fontWeight?.toString(),
        [styleVars.color]: color,
      })}
      {...rest}
    >
      {children}
    </Component>
  );
};
