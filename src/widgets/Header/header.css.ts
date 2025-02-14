import { style } from "@vanilla-extract/css";

export const headerContainer = style({
  padding: "1rem",
  backgroundColor: "#fff",
  borderBottom: "1px solid #eee",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "sticky",
  top: 0,
  zIndex: 100,
});

export const headerWrapper = style({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
});
