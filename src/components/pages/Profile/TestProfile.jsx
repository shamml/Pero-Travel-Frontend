import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import exitLogo from '../../../assets/another/exit.png';
import ex from '../../../assets/ex.png';
import { useDispatch, useSelector } from 'react-redux';
import Admin from '../AdminPage';
import { exit } from '../../../redux/features/application';
import { Link } from 'react-router-dom';
import { editAvatar, fetchIdUser } from '../../../redux/features/user';
import { deleteTour } from '../../../redux/features/tours';

const TestProfile = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState('');

  useEffect(() => {
    dispatch(fetchIdUser());
  }, [dispatch]);

  const dataUser = useSelector(state => state.user.data)
  const id = useSelector((state) => state.application.id);
  const role = useSelector((state) => state.application.role);
  const tours = useSelector((state) => state.tours.tours[0]);


  const currentUser = dataUser.length ? dataUser.find((item) => item._id === id) : {};



  if (role === 'admin') {
    return <Admin />;
  }

  const exitUser = () => {
    dispatch(exit());
  };

  function handleClickEditAvatar() {
    dispatch(editAvatar(image));
  }

  const handleClickDeleteTour = () => {
    dispatch(deleteTour(id));
  };

  return (
    <>
      <div className={styles.profileUser}>
        <div className={styles.profileBlock}>
          <div className={styles.profileDesk}>
            <div className={styles.profileMain}>
              <div className={styles.avatarImg}>
                <img
                  src={`http://localhost:3030/${currentUser.image}`}
                  alt=""
                />{' '}
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
                <div className={styles.profileName}>
                  Имя: {currentUser.firstName}
                </div>
                <div className={styles.profileLastName}>
                  Фамилия: {currentUser.lastName}
                </div>
                <div className={styles.profileAge}>
                  Возраст: {currentUser.age}{' '}
                </div>
              </div>
            </div>
            <div className={styles.profileOrder}>
              <div className={styles.profileOrderBlock}>
                <div className={styles.profileDatas}>
                  <div className={styles.orderImg}>
                    <img
                      src={`http://localhost:3030/${tours.bgImage}`}
                      alt=""
                    />
                  </div>
                  <div className={styles.orderDesk}>
                    <div className={styles.orderWrap}>
                      <div className={styles.typeTour}>
                        <h4>Категоря тура</h4>
                        {tours.typeTour}
                      </div>
                      <div className={styles.tourTitle}>
                        <h4>Название тура</h4>
                        {tours.title}
                      </div>
                      <div className={styles.peopleAndPrice}>
                        <div className={styles.tourCount}>
                          <h4>Всего людей</h4>5
                        </div>

                        <div className={styles.tourCount}>
                          <h4>Итого</h4>
                          {tours.price + tours.priceForChild} P.
                        </div>
                      </div>
                      <div className={styles.carouselButton}>
                        <button style={{ cursor: 'pointer' }}>
                          Оставить отзыв
                        </button>
                      </div>
                      <div
                        onClick={handleClickDeleteTour}
                        className={styles.deleteTour}
                      >
                        <img src={ex} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
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
