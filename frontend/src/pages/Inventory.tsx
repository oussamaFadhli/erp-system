import React,{useEffect,useState} from "react";
import { DashboardLayout } from "../layouts";
import axios from "axios";
import { GeneralStatics } from "../screens";
import { Table } from "../screens";
const Inventory: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/inventory/recently_added_products/');
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
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
          tableData={data}
        />
        <Table
          tableNameSection="Latest Sales"
          tableTitle1="ID"
          tableTitle2="Product"
          tableTitle3="Date"
          tableTitle4="Total Sale"
          tableData={data}
        />
        <Table
          tableNameSection="Recently Added Products"
          tableTitle1="ID"
          tableTitle2="Product"
          tableTitle3="Category"
          tableTitle4="Price"
          tableData={data}
        />
      </section>
    </DashboardLayout>
  );
};

export default Inventory;
