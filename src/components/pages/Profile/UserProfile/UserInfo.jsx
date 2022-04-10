import React, { useState } from 'react';
import styles from './styles.module.css';
import { editAvatar } from '../../../../redux/features/user';
import { useDispatch } from 'react-redux';

const UserInfo = ({ user }) => {
  const dispatch = useDispatch();

  const [image, setImage] = useState('');

  const handleClickEditAvatar = () => {
    dispatch(editAvatar(image));
  };

  return (
    <div className={styles.profileMain}>
      <div className={styles.avatarImg}>
        <img src={`http://localhost:3030/${user.image}`} alt="#" />{' '}
      </div>
      <div className={styles.choose}>
        <div>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            title=""
          />
        </div>
        <div>
          <button disabled={!image} onClick={handleClickEditAvatar}>
            Загрузить фото
          </button>
        </div>
      </div>
      <div className={styles.profileId}>
        <div className={styles.profileName}>Имя: {user.firstName}</div>
        <div className={styles.profileLastName}>Фамилия: {user.lastName}</div>
        <div className={styles.profileAge}>Возраст: {user.age}</div>
      </div>
    </div>
  );
};

export default UserInfo;
