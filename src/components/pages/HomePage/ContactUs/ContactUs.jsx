import React, { useState } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { addClaims } from '../../../../redux/features/claims';

const ContactUs = () => {
  const dispatch = useDispatch();

  const [sendMessage, setSendMessage] = useState(false);
  const [email, setEmail] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleClickAddClaims = () => {
    dispatch(addClaims(email));
    setSendMessage(!sendMessage);
  };
  return (
    <div className={styles.contactUsContent}>
      <div className={styles.natureImgContactUs}>
        <div className={styles.contentContactUs}>
          <div className={styles.titleContactUs}>Остались вопросы?</div>
          <div className={styles.subtitleContactUs}>
            Оставь заявку и мы ответим
          </div>
          <div className={styles.inputsContactUs}>
            {/* <div className={styles.inputTypeContactUs}>
              <input type="text" name="name" placeholder="Имя" />
            </div>
            <div className={styles.inputTypeContactUs}>
              <input type="text" name="number" placeholder="Телефон" />
            </div> */}
            <div className={styles.inputTypeContactUs}>
              <input
                value={email}
                onChange={handleChangeEmail}
                type="text"
                name="email"
                placeholder="Почта"
              />
            </div>
          </div>
          <div className={styles.buttonApplicationContactUs}>
            <button onClick={handleClickAddClaims} disabled={sendMessage}>
              {sendMessage ? 'Заявка оформлена' : 'Оформить заявку'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
