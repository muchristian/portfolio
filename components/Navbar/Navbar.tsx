import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

interface props {
  children: JSX.Element;
  classes: string;
}
export const Navbar: React.FC<props> = ({ children, classes }) => {
  return (
    <nav
      className={`navbar w-full flex justify-between items-center ${classes}`}
    >
      {children}
    </nav>
  );
};
