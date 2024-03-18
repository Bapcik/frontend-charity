import { Button, Form, Input, Upload, UploadProps, message } from "antd";
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
                  name="card"
                  rules={[{ required: true, message: "Введите номер карты" }]}
                >
                  <Input maxLength={16} className={styles.form_page_input} />
                </Form.Item>
              </div>

              <div>
                <label className={styles.form_page_input_label}>Сумма</label>
                <Form.Item
                  name="raiseMoney"
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
              name="description"
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
              <div className={styles.container_form_page_input_text}>
                <label className={styles.form_page_input_label}>Видео</label>
                <p className={styles.form_page_input_text}>
                  *Необязательная информация
                </p>
              </div>
              <Input
                placeholder="Вставьте ссылку из youtube"
                className={styles.form_page_input}
              />
            </Form.Item>

            <Form.Item
              name="image"
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
