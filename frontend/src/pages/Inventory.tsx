import React from "react";
import { DashboardLayout } from "../layouts";
import { GeneralStatics } from "../screens";
import { data1,data2,data3 } from "../data";
import { Table } from "../screens";
const Inventory: React.FC = () => {
  return (
    <DashboardLayout>
      <section className="flex-col p-2">
        <GeneralStatics />
        <Table
          tableNameSection="Highest Selling Products"
          tableTitle1="ID"
          tableTitle2="Product"
          tableTitle3="Total Sold"
          tableTitle4="Total Quantity"
          tableData={data1}
        />
        <Table
          tableNameSection="Latest Sales"
          tableTitle1="ID"
          tableTitle2="Product"
          tableTitle3="Date"
          tableTitle4="Total Sale"
          tableData={data2}
        />
        <Table
          tableNameSection="Recently Added Products"
          tableTitle1="ID"
          tableTitle2="Product"
          tableTitle3="Category"
          tableTitle4="Price"
          tableData={data3}
        />
      </section>
    </DashboardLayout>
  );
};

export default Inventory;
