import React from "react";
import { DashboardLayout } from "../layouts";
import { GeneralStatics,RecentlyAddedProducts,LatestSoldProductsTable } from "../screens";

const Inventory: React.FC = () => {
  return (
    <DashboardLayout>
      <section className="flex-col p-2">
        <GeneralStatics />
        <RecentlyAddedProducts/>
        <LatestSoldProductsTable/>
      </section>
    </DashboardLayout>
  );
};

export default Inventory;
