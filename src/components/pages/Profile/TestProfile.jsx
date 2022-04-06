import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import exitLogo from '../../../assets/another/exit.png';
import { useDispatch, useSelector } from 'react-redux';
import Admin from '../AdminPage';
import { exit } from '../../../redux/features/application';
import { Link } from 'react-router-dom';
import { editAvatar, fetchIdUser } from '../../../redux/features/user';

const TestProfile = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState('');

  useEffect(() => {
    dispatch(fetchIdUser());
  }, [dispatch]);

  const dataUser = useSelector((state) => state.user.data);
  const role = useSelector((state) => state.application.role);

  if (role === 'admin') {
    return <Admin />;
  }

  const exitUser = () => {
    dispatch(exit());
  };

  function handleClickEditAvatar() {
    dispatch(editAvatar(image));
  }

  return (
    <>
      {dataUser.map((user) => {
        return (
          <div key={user._id} className={styles.profileUser}>
            <div>Имя: {user.firstName}</div>
            <div>Фамилия: {user.lastName}</div>
            <div>Возраст: {user.age} </div>
            <div className={styles.avatarImg}>
              <img src={`http://localhost:3030/${user.image}`} alt="" />{' '}
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
              />
              <button disabled={!image} onClick={handleClickEditAvatar}>
                add
              </button>
            </div>
          </div>
        );
      })}
      <Link to="/">
        <div
          style={{ cursor: 'pointer' }}
          onClick={exitUser}
          className={styles.exit}
        >
          <img src={exitLogo} alt="" />
        </div>
      </Link>
    </>
  );
};

export default TestProfile;
