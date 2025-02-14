interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: number;
  color?: string;
}

export const Text = ({
  as = "span",
  children,
  fontSize = "12px",
  fontFamily,
  fontWeight,
  color = "#000",
}: TextProps) => {
  const Component = as;
  return (
    <Component
      style={{
        fontSize,
        fontFamily,
        fontWeight,
        color,
      }}
    >
      {children}
    </Component>
  );
};
