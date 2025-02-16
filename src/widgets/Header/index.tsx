"use client";

import { useState, useEffect, useMemo } from "react";
import {
  dropDownBackGround,
  headerContainer,
  headerDropdown,
  headerDropdownImg,
  headerLeft,
  headerWrapper,
  rotateIcon,
  rotateIconActive,
} from "./header.css";
import { Text, NextImg } from "@/shared/ui";
import { usePathname } from "next/navigation";
import Link from "next/link";

type PageName = "MT게임" | "MT예약" | "MODUMT";
type PagePath = "/mt-game" | "/mt-reservation" | "/";

type PageLink = {
  name: PageName;
  href: PagePath;
};

const pageLinks: PageLink[] = [
  {
    name: "MT게임",
    href: "/mt-game",
  },
  {
    name: "MT예약",
    href: "/mt-reservation",
  },
  {
    name: "MODUMT",
    href: "/",
  },
];

export const Header: React.FC = () => {
  const currentPath = usePathname() as PagePath;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const { headerName, dropDownData } = useMemo(() => {
    const currentPage = pageLinks.find((el) => el.href === currentPath);
    if (!currentPage) {
      return {
        headerName: "",
        dropDownData: [],
      };
    }
    return {
      headerName: currentPage.name,
      dropDownData: pageLinks.filter(
        (el) => el.href !== currentPath && el.name !== "MODUMT",
      ),
    };
  }, [currentPath]);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [currentPath]);

  return (
    <header className={headerContainer}>
      <div className={headerWrapper}>
        <div className={headerLeft}>
          <Text fontSize="16px">{headerName}</Text>
          <NextImg
            className={`${headerDropdownImg} ${isDropdownOpen ? rotateIconActive : rotateIcon} `}
            src="/dropdown.png"
            alt="dropdown"
            width={11}
            height={11}
            touchable={true}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
        </div>

        <NextImg
          src="/header_menu.png"
          alt="menu"
          width={15}
          height={15}
          touchable={true}
        />
        {isDropdownOpen && (
          <DropDownBackground onClick={() => setIsDropdownOpen(false)}>
            <LogoDropdown dropDownData={dropDownData} />
          </DropDownBackground>
        )}
      </div>
    </header>
  );
};

const DropDownBackground = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick} className={dropDownBackGround}>
      {children}
    </div>
  );
};

const LogoDropdown = ({ dropDownData }: { dropDownData: PageLink[] }) => {
  return (
    <nav className={headerDropdown}>
      <ul>
        {dropDownData.map((el) => (
          <li key={el.name}>
            <Link href={el.href}>
              <Text fontSize="16px">{el.name}</Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
