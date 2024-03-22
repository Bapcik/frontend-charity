import {
  Button,
  Form,
  Input,
  Upload,
  UploadProps,
  message,
  UploadFile,
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
import { usePostCharity } from "../../services/usePostCharity.ts";

const { Dragger } = Upload;

export const FormPage = () => {
  const [descriptionInput, setDescriptionInput] = useState("");
  const { mutate: PostCharity } = usePostCharity();
  const [uploadImage, setUploadImage] = useState<UploadFile>();
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        setUploadImage(info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleUpload = async (values: IPeopleData) => {
    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("phone", String(values.phone));
    formData.append("cardNumber", values.cardNumber);
    formData.append("title", values.title);
    formData.append("appealDescription", descriptionInput);
    formData.append("image", uploadImage[0].originFileObj as Blob);
    formData.append("sum", String(values.sum));
    PostCharity(formData);
  };

  return (
    <div className={styles.container_form_page}>
      <div className={styles.container_form_page_body}>
        <h2 className={styles.form_page_title}>Форма подачи помощи</h2>
        <InformationText text=" Вся ниже указанная информация будет отображаться в вашей анкете." />
        <div>
          <Form
            name="file-upload-form"
            layout="vertical"
            onFinish={handleUpload}
          >
            <div className={styles.container_form_page_input}>
              <div>
                <label className={styles.form_page_input_label}>ФИО</label>
                <Form.Item
                  name="fullName"
                  rules={[{ required: true, message: "Введите ФИО" }]}
                >
                  <Input className={styles.form_page_input} />
                </Form.Item>
              </div>
              <div>
                <label className={styles.form_page_input_label}>
                  Номер телефона
                </label>
                <Form.Item
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
                <label className={styles.form_page_input_label}>
                  Номер карты
                </label>
                <Form.Item
                  name="cardNumber"
                  rules={[{ required: true, message: "Введите номер карты" }]}
                >
                  <Input maxLength={16} className={styles.form_page_input} />
                </Form.Item>
              </div>

              <div>
                <label className={styles.form_page_input_label}>Сумма</label>
                <Form.Item
                  name="sum"
                  rules={[{ required: true, message: "Введите сумму" }]}
                >
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className={styles.form_page_input_money}
                  />
                </Form.Item>
              </div>
            </div>
            <h3 className={styles.form_page_input_title}>Описание</h3>

            <label className={styles.form_page_input_label}>
              Заголовок обращения
            </label>
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Введите название" }]}
              className={styles.form_page_form_title}
            >
              <Input className={styles.form_page_input} />
            </Form.Item>

            <div style={{ margin: "20px 0" }}>
              <InformationText text=" Опишите вашу ситуацию." />
            </div>

            <label className={styles.form_page_input_label}>О вас</label>

            <Form.Item
              rules={[{ required: true, message: "Напишите о своей проблеме" }]}
              className={styles.form_page_form_description}
            >
              <CKEditor
                editor={ClassicEditor}
                data={descriptionInput}
                onChange={(_event, editor) => {
                  const data = editor.getData();
                  setDescriptionInput(data);
                }}
              />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Выберите фотографию!",
                },
              ]}
            >
              <div className={styles.container_form_page_input_text}>
                <label className={styles.form_page_input_label}>
                  Фотография
                </label>
                <p className={styles.form_page_input_text}>
                  *Обязательная информация
                </p>
              </div>
              <Dragger
                {...props}
                name="image"
                accept=".jpg,.jpeg,.png"
                maxCount={1}
                className={styles.form_page_input_dragger}
              >
                <img src={gallery} alt="gallery" />

                <div className={styles.container_form_page_input_dragger}>
                  <p className={styles.form_page_input_dragger_button}>
                    Загрузить файл
                  </p>
                  <p className={styles.form_page_input_dragger_text}>
                    или перетащите файл
                  </p>
                </div>

                <p className={styles.form_page_input_dragger_text_warning}>
                  PNG, JPG до 10MB
                </p>
              </Dragger>
            </Form.Item>
            <div className={styles.container_form_page_button}>
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button className={styles.form_page_button} htmlType="submit">
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
