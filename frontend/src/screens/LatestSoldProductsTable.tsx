import { useMemo, useEffect, useState } from "react";
import { SubTitles } from "../components";
import {DateTime} from 'luxon'
import axios from "axios";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
const LatestSoldProductsTable = () => {
  const [RecentlyAddedProducts, setRecentlyAddedProducts] = useState<string[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/inventory/latest_sold_products/"
        );
        setRecentlyAddedProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const data = useMemo(() => RecentlyAddedProducts, [RecentlyAddedProducts]);
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "product_name",
    },
    {
      header: "Order Date",
      accessorKey: "order_date",
      cell: function convertIsoToDateTime(info: {
        getValue: () => string;
      }): DateTime {
        return DateTime.fromISO(info.getValue(), {
          locale: "en",
        }).toLocaleString(DateTime.DATE_MED);
      },
    },
    {
      header: "Total Sales",
      accessorKey: "total_sales",
    },
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <SubTitles title="Latest Sold Products" />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="whitespace-nowrap px-4 py-2 text-gray-700"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="whitespace-nowrap px-4 py-2 text-center text-gray-700"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LatestSoldProductsTable;
