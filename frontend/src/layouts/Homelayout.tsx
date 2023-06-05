import React, { ReactNode } from "react";
import { Navbar } from "../screens";

interface LayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
