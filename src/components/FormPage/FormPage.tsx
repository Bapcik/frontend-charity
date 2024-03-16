import {
  Button,
  Form,
  Input,
  InputNumber,
  Upload,
  UploadProps,
  message,
} from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { IPeopleData } from "../../interface/IPeople";
import InformationText from "../../ui/Text/InformationText.tsx";
import AboutModerationModal from "./AboutModerationModal/AboutModerationModal.tsx";
import gallery from "../../assets/gallery.svg";
import InputMask from "react-input-mask";
import styles from "./FormPage.module.scss";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

export const FormPage = () => {
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleUpload = async (values: IPeopleData) => {
    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("phone", String(values.phone));
    formData.append("card", values.card);
    formData.append("title", values.title);
    formData.append("description", descriptionInput);
    if (values.image) {
      formData.append("image", values.image.originFileObj!);
    }

    formData.append("raiseMoney", String(values.raiseMoney));
    formData.append("video", values.video);
    console.log(formData);
  };

  return (
    <div className={styles.container_form_page}>
      <div className={styles.container_form_page_body}>
        <h2>Форма подачи помощи</h2>
        <InformationText text=" Вся ниже указанная информация будет отображаться в вашей анкете." />
        <div>
          <Form
            name="file-upload-form"
            layout="vertical"
            onFinish={handleUpload}
          >
            <div className={styles.container_form_page_input}>
              <div>
                <Form.Item
                  label="ФИО"
                  name="fullName"
                  rules={[{ required: true, message: "Введите ФИО" }]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  label="Номер телефона"
                  name="phone"
                  rules={[
                    { required: true, message: "Введите номер телефона" },
                  ]}
                >
                  <InputMask
                    className={styles.form_page_input_phone}
                    mask="+7 (999) 999-99-99"
                  />
                </Form.Item>
              </div>

              <div>
                <Form.Item
                  label="Номер карты"
                  name="card"
                  rules={[{ required: true, message: "Введите номер карты" }]}
                >
                  <Input maxLength={16} />
                </Form.Item>
              </div>

              <div>
                <Form.Item
                  label="Сумма"
                  name="raiseMoney"
                  rules={[{ required: true, message: "Введите сумму" }]}
                >
                  <input
                   type="text" inputMode="numeric" pattern="[0-9]*"
                    className={styles.form_page_input_money}
                  />
                </Form.Item>
              </div>
            </div>
            <h3>Описание</h3>
            <Form.Item
              label="Заголовок  обращения"
              name="title"
              rules={[{ required: true, message: "Введите название" }]}
              className={styles.form_page_form_title}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="О вас"
              name="description"
              rules={[{ required: true, message: "Напишите о своей проблеме" }]}
              className={styles.form_page_form_description}
            >
              <CKEditor
                editor={ClassicEditor}
                data={descriptionInput}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setDescriptionInput(data);
                }}
              />
            </Form.Item>
            <label className="label">Видео</label>
            <Form.Item
              name="video"
              rules={[
                {
                  type: "url",
                  message: "Пожалуйста, введите корректную ссылку на видео",
                },
                {
                  message: "Введите ссылку на видео",
                },
              ]}
            >
              <Input placeholder="Вставьте ссылку из youtube" />
            </Form.Item>

            <Form.Item
              label="Фото"
              name="image"
              rules={[
                {
                  required: true,
                  message: "Выберите фотографию!",
                },
              ]}
            >
              <Dragger {...props} accept=".jpg,.jpeg,.png" maxCount={1}>
                <p className="ant-upload-drag-icon">
                  <img src={gallery} alt="gallery" />
                </p>
                <p className="ant-upload-text">
                  Загрузить файл или перетащите файл
                </p>
                <p className="ant-upload-hint">PNG, JPG до 10MB</p>
              </Dragger>
            </Form.Item>
            <div className={styles.container_form_page_button}>
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button className="button" htmlType="submit">
                  Отправить на модерацию
                </Button>
                <AboutModerationModal />
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
