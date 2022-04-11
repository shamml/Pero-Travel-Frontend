import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { editAvatar, fetchIdUser } from '../../../../redux/features/user';
import { Link } from 'react-router-dom';

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

  const currentUser = dataUser.length
    ? dataUser.find((item) => item._id === id)
    : {};

  return (
    <div className={styles.profileDesk}>
      <div className={styles.profileMain}>
        <div className={styles.avatarImg}>
          <img src={`http://localhost:3030/${currentUser.image}`} alt="" />{' '}
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
              add
            </button>
          </div>
        </div>
        <div className={styles.profileId}>
          <div className={styles.profileName}>Имя: {currentUser.firstName}</div>
          <div className={styles.profileLastName}>
            Фамилия: {currentUser.lastName}
          </div>
          <div className={styles.profileAge}>Возраст: {currentUser.age} </div>
        </div>
      </div>
      <div className={styles.adminPageMain}>
        <Link to="/profile/addTour">Add</Link>;
        <Link to="/profile/fetchTour">Fetch</Link>;
        <Link to="/profile/booking">Booking</Link>;
      </div>
    </div>
  );
};

export default AdminSide;
