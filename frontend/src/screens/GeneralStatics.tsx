import React from "react";
import { DashboardCard, SubTitles } from "../components";
interface GeneralStaticsDataType {
  id: number;
  title: string;
  icon: string;
  link: string;
  value: string;
}
const GeneralStaticsData: GeneralStaticsDataType[] = [
  {
    id: 1,
    title: "Total Products",
    icon: "/icons/product.png",
    link: "/inventory/products",
    value: "750",
  },
  {
    id: 2,
    title: "Total Sales",
    icon: "/icons/bank.png",
    link: "/inventory/sales",
    value: "30,000$",
  },
  {
    id: 3,
    title: "Total Warehouses",
    icon: "/icons/warehouse.png",
    link: "/inventory/warehouses",
    value: "120",
  },
  {
    id: 4,
    title: "Total Stock",
    icon: "/icons/trolley.png",
    link: "/inventory/stock",
    value: "34000",
  },
];
const GeneralStatics: React.FC = () => {
  return (
    <>
      <SubTitles title="General Statics" />
      <section className="grid grid-cols-4 gap-4">
        {GeneralStaticsData.map((data) => (
          <DashboardCard
            key={data.id}
            title={data.title}
            link={data.link}
            icon={data.icon}
            value={data.value}
          />
        ))}
      </section>
    </>
  );
};

export default GeneralStatics;
