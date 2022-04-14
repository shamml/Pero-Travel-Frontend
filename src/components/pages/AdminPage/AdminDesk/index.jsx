import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { editAvatar, fetchIdUser } from '../../../../redux/features/user';

const AdminSide = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(fetchIdUser());
  }, [dispatch]);

  const [image, setImage] = useState('');

  function handleClickEditAvatar() {
    dispatch(editAvatar(image));
  }

  const dataUser = useSelector((state) => state.user.data);
  const id = useSelector((state) => state.application.id);

  return (
    <div className={styles.profileDesk}>
      <div className={styles.profileMain}>
        <div className={styles.avatarImg}>
          <img src={`http://localhost:3030/${dataUser.image}`} alt="" />{' '}
        </div>
        {/* <div className={styles.choose}>
          <div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              title=""
            />
          </div>
          <div>
            <button disabled={!image} onClick={handleClickEditAvatar}>
              add
            </button>
          </div>
        </div> */}
        {/* <div className={styles.profileId}>
          <div className={styles.profileName}>Имя: {dataUser.firstName}</div>
          <div className={styles.profileLastName}>
            Фамилия: {dataUser.lastName}
          </div>
          <div className={styles.profileAge}>Возраст: {dataUser.age} </div>
        </div> */}
        <>
          <div className={styles.nameInfo}>
            {dataUser.firstName} {dataUser.lastName}
          </div>
          <div style={{ fontSize: '20px', color: '#0499DD' }}>
            <b>{dataUser.age} лет</b>
          </div>
        </>
      </div>
    </div>
  );
};

export default AdminSide;
