import React from "react";
import { Navbar, Sidebar } from "../screens";
interface DashboardsLayoutProps {
  children: React.ReactNode;
}

const DashboardsLayout: React.FC<DashboardsLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="p-4 pt-12 sm:ml-64">{children}</main>
    </>
  );
};

export default DashboardsLayout;
