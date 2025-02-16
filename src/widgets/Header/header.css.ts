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
  position: "relative",
});

export const headerLeft = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  zIndex: 2,
});

export const headerDropdown = style({
  position: "absolute",
  padding: "1rem",
  top: "3rem",
  backgroundColor: "#fff",
  border: "1px solid #eee",
  borderRadius: "5px",
});

export const headerDropdownImg = style({
  transition: "transform 0.2s ease-in-out",
});

export const rotateIcon = style({
  transform: "rotate(0deg)",
});

export const rotateIconActive = style({
  transform: "rotate(180deg)",
});

export const dropDownBackGround = style({
  position: "absolute",
  top: "-1rem",
  left: "-1rem",
  width: "calc(100% + 2rem)",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1,
});
