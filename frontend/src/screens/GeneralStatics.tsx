import React from "react";
import { DashboardCard, SubTitles } from "../components";
import { GeneralStaticsDataType } from "../types";
import { GeneralStaticsData } from "../data";
const GeneralStatics: React.FC = () => {
  return (
    <>
      <SubTitles title="General Statics" />
      <section className="grid grid-cols-4 gap-4">
        {GeneralStaticsData.map((data:GeneralStaticsDataType) => (
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
