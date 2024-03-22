import { Dropdown, Space, Table, TableColumnsType } from "antd";
import { MdMoreVert } from "react-icons/md";
import styles from "./AdminTable.module.scss";

interface DataType {
  key: React.Key;
  fullName: string;
  title: string;
  sum: number;
  sumCollected: number;
}

const items = [
  { key: "1", label: <a href="/view">Посмотреть</a> },
  { key: "2", label: <a href="/publish">Опубликовать</a> },
  { key: "3", label: <a href="/delete">Удалить</a> },
];

const columns: TableColumnsType<DataType> = [
  {
    title: "Имя",
    dataIndex: "fullName",
    width: 150,
  },
  {
    title: "Заголовок",
    dataIndex: "title",
    ellipsis: true,
  },
  {
    title: "Сумма",
    dataIndex: "sum",
    sorter: {
      compare: (a, b) => a.sum - b.sum,
      multiple: 2,
    },
    ellipsis: true,
  },
  {
    title: "Собранная сумма",
    dataIndex: "sumCollected",
    sorter: {
      compare: (a, b) => a.sumCollected - b.sumCollected,
      multiple: 1,
    },
    ellipsis: true,
  },

  {
    dataIndex: "operation",
    key: "operation",
    render: () => (
      <Space size="middle">
        <Dropdown menu={{ items }}>
          <a>
            Посмотреть <MdMoreVert />
          </a>
        </Dropdown>
      </Space>
    ),
    width: 130,
  },
];

const data: DataType[] = [
  {
    key: "1",
    fullName: "John Brown",
    title: "John Brown",
    sum: 60,
    sumCollected: 70,
  },
  {
    key: "2",
    fullName: "Jim Green",
    title: "Jim Green",
    sum: 66,
    sumCollected: 89,
  },
  {
    key: "3",
    fullName: "Joe Black",
    title: "Joe Black",
    sum: 90,
    sumCollected: 70,
  },
  {
    key: "4",
    fullName: "Jim Red",
    title: "Jim Red",
    sum: 99,
    sumCollected: 89,
  },
];

export const AdminTable = () => {
  return (
    <div className={styles.admin_table_container}>
      <Table
        className={styles.admin_table}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
