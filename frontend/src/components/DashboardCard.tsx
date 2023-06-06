import React from "react";
import { Link } from "react-router-dom";
interface DashboardCardProps {
  icon: string;
  link: string;
  title: string;
  value: number | string;
}
const DashboardCard: React.FC<DashboardCardProps> = ({
  icon,
  link,
  title,
  value,
}) => {
  return (
    <>
      <div className=" w-72 h-36">
        <Link
          to={link}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700  dark:hover:bg-sky-100 hover:duration-150"
        >
          <div className="p-4">
            <img src={icon} alt="picture" className=" w-24" />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-600 ">
              {title}
            </h5>
            <h3 className="mb-3 font-bold text-gray-900 text-2xl ">{value}</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DashboardCard;
