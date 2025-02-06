interface TextProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  fontSize: number;
  fontFamily?: string;
  fontWeight?: number;
  color?: string;
}

export const Text = ({
  as = "span",
  children,
  fontSize,
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
