import styles from "./AdminLoginPage.module.scss";

export const AdminLoginPage = () => {
  return (
    <div className={styles.admin_login_page_container}>
      <div className={styles.admin_login_page_container_body}>
        <h2 className={styles.admin_login_page_title}>Вход для админа</h2>
        <div className={styles.admin_login_page_container_input}>
          <p className={styles.admin_login_page_text}>имя пользователя</p>
          <input type="email" className={styles.admin_login_page_input} />
        </div>
        <div className={styles.admin_login_page_container_input}>
          <p className={styles.admin_login_page_text}>пароль</p>
          <input type="password" className={styles.admin_login_page_input} />
        </div>
        <button className={styles.admin_login_page_button}>Войти</button>
      </div>
    </div>
  );
};
