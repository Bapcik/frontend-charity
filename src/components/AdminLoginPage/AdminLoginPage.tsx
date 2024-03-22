import styles from "./AdminLoginPage.module.scss";
import { useAdminLogin } from "../../services/useAdminLogin.ts";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { IAuth } from "../../interface/IAuth.ts";

export const AdminLoginPage = () => {
  const [state, setState] = useState<IAuth>({
    username: "",
    password: "",
  });

  const auth = useAdminLogin();
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.mutate(state);
  };
  return (
    <form onSubmit={handleLogin}>
      <div className={styles.admin_login_page_container}>
        <div className={styles.admin_login_page_container_body}>
          <h2 className={styles.admin_login_page_title}>Вход для админа</h2>
          <div className={styles.admin_login_page_container_input}>
            <p className={styles.admin_login_page_text}>имя пользователя</p>
            <input
              required
              name={"username"}
              onChange={inputChangeHandler}
              type="text"
              className={styles.admin_login_page_input}
            />
          </div>
          <div className={styles.admin_login_page_container_input}>
            <p className={styles.admin_login_page_text}>пароль</p>
            <input
              required
              onChange={inputChangeHandler}
              name={"password"}
              type="password"
              className={styles.admin_login_page_input}
            />
          </div>
          <button type={"submit"} className={styles.admin_login_page_button}>
            Войти
          </button>
        </div>
      </div>
    </form>
  );
};
