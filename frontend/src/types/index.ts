export interface TableRowDataType {
  tableRowElement1: string | number | boolean;
  tableRowElement2: string | number | boolean;
  tableRowElement3?: string | number | boolean;
  tableRowElement4?: string | number | boolean;
}

export interface TableHeadTitle {
  tableNameSection: string;
  tableTitle1: string;
  tableTitle2: string;
  tableTitle3: string;
  tableTitle4: string;
}
export  interface TableProps extends TableHeadTitle {
    tableData: TableRowDataType[];
  }

export interface GeneralStaticsDataType {
    id: number;
    title: string;
    icon: string;
    link: string;
    value: string;
  }