import { headerContainer, headerWrapper } from "./header.css";
import { Text, NextImg } from "@/shared/ui";

export const Header: React.FC = () => {
  return (
    <header className={headerContainer}>
      <div className={headerWrapper}>
        <Text fontSize="12px">Header</Text>
        <NextImg
          src="/header_menu.png"
          alt="logo"
          width={15}
          height={15}
          touchable={true}
        />
      </div>
    </header>
  );
};
