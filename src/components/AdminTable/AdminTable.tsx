import { Button, Table, TableColumnsType } from "antd";
import styles from "./AdminTable.module.scss";
import { ICardPeople } from "../../interface/ICardPeople.ts";
import { useGetAllCharity } from "../../services/useGetAllCharity.ts";
import { useDeleteCharity } from "../../services/useDeleteCharity.ts";
import { usePublishCharity } from "../../services/usePublishCharity.ts";
import { useNavigate } from "react-router-dom";

export const AdminTable = () => {
  const { mutate: deleteCharity } = useDeleteCharity();
  const { mutate: publish } = usePublishCharity();
  const navigate = useNavigate();
  const columns: TableColumnsType<ICardPeople> = [
    {
      title: "Имя",
      dataIndex: "fullName",
      width: 200,
      render: (_, data) => (
        <div onClick={() => navigate(`/charity/${data.id}`)}>
          {data.fullName}
        </div>
      ),
    },
    {
      title: "Заголовок",
      dataIndex: "title",
      ellipsis: true,
      width: 200,
    },
    {
      title: "Телефон",
      dataIndex: "phone",
      ellipsis: true,
      width: 200,
    },
    {
      title: "Сумма",
      dataIndex: "sum",
      width: 200,
      render: (_, data) => <div>{data.sum.toLocaleString()}</div>,
    },
    {
      title: "Собранная сумма",
      dataIndex: "sumCollected",
      width: 200,
      render: (_, data) => <div>{data.sumCollected.toLocaleString()}</div>,
    },
    {
      title: "Удаление",
      key: "delete",
      width: 110,
      render: (_, data) => (
        <Button
          className={styles.btn}
          type="default"
          onClick={() => deleteCharity(data.id)}
        >
          Удалить
        </Button>
      ),
    },
    {
      title: "Опубликовать",
      key: "view",
      width: 250,
      render: (data) => (
        <Button type="dashed" onClick={() => publish(data.id)}>
          {data.isPublish ? "Снять с публикации" : "Опубликовать"}
        </Button>
      ),
    },
  ];

  const { data = [] } = useGetAllCharity();

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
