import React from "react";
import {TableProps } from "../types";
import { SubTitles } from "../components";

const Table: React.FC<TableProps> = ({
  tableNameSection,
  tableTitle1,
  tableTitle2,
  tableTitle3,
  tableTitle4,
  tableData,
}) => {
  return (
    <>
      <section>
        <SubTitles title={tableNameSection}/>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {tableTitle1}
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {tableTitle2}
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {tableTitle3}
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {tableTitle4}
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {tableData.map((data, index) => (
                <tr
                  key={index}
                  className="whitespace-nowrap px-4 py-2 text-gray-700"
                >
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {data.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {data.product_name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {data.category_name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {data.selling_price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Table;
