export interface TableRowDataType {
  tableRowElement1: number;
  tableRowElement2: string;
  tableRowElement3: string;
  tableRowElement4: string;
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