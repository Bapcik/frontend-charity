import styles from "./PayCard.module.scss";
import visa from "../../assets/visa.svg";
import card from "../../assets/card.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { usePayCharity } from "../../services/usePayCharity.ts";
const PayCard = () => {
  const { id } = useParams();
  const { mutate: pay } = usePayCharity();
  const [state, setState] = useState({
    cardNumber: "",
    sum: "",
    data: "",
    cvv: "",
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    pay({ id, sum: state.sum });
  };
  return (
    <div className={styles.container}>
      <div className={styles.paycard}>
        <div className={styles.header}>Оплата</div>
        <div className={styles.card}>
          <div className={styles.img_container}>
            <img className={styles.img} src={visa} alt="visa" />
          </div>
          <div className={styles.img_chip}>
            <img className={styles.img_chip} src={card} alt="visa" />
          </div>
          <div className={styles.card_number}>
            <h2>{state.cardNumber.replace(/(\d{4})/g, "$1 ").trim()}</h2>
          </div>
          <div className={styles.card_description}>
            <div className={styles.card_detail}>
              <div>ММ/ГГ</div>
              <div>{state.data.replace(/(\d{2})/g, "$1 ").trim()}</div>
            </div>
            <div className={styles.card_detail}>
              <div>CVV</div>
              <div>{state.cvv}</div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form_pay}>
          <div>
            <label>Cумма</label>
            <input
              className={styles.input}
              type="number"
              name="sum"
              value={state.sum}
              onChange={inputChangeHandler}
              autoComplete="off"
            />
          </div>
          <div>
            <label>Номер карты</label>
            <input
              className={styles.input}
              value={state.cardNumber}
              onChange={inputChangeHandler}
              type="text"
              maxLength={16}
              name="cardNumber"
              autoComplete="off"
            />
          </div>
          <div className={styles.form_pay_detail_card}>
            <div>
              <label className={styles.label}>ММ/ГГ</label>
              <input
                className={styles.input}
                type="text"
                maxLength={4}
                name="data"
                autoComplete="off"
                value={state.data}
                onChange={inputChangeHandler}
              />
            </div>
            <div>
              <label className={styles.label}>CVV</label>
              <input
                className={styles.input}
                type="text"
                maxLength={3}
                name="cvv"
                autoComplete="off"
                value={state.cvv}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <button type={"submit"} className={styles.button}>
            Оплатить
          </button>
        </form>
      </div>
    </div>
  );
};

export default PayCard;
