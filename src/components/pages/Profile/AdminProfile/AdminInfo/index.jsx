import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { editAvatar } from '../../../../../redux/features/user';

const AdminSide = ({ user }) => {
  const dispatch = useDispatch();

  const [image, setImage] = useState('');

  const handleClickEditAvatar = () => {
    dispatch(editAvatar(image));
  };

  return (
    <div className={styles.profileMain}>
      <div className={styles.avatarImg}>
        <img src={`http://localhost:3030/${user.image}`} alt="" />{' '}
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
        <div className={styles.profileLastName}>Фамилия: {user.lastName}</div>
        <div className={styles.profileName}>Имя: {user.firstName}</div>
      </div>
    </div>
  );
};

export default AdminSide;
