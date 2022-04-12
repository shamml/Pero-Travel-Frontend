import React, { useEffect, useState } from 'react';
import exitLogo from '../../../assets/another/exit.png';
import ex from '../../../assets/ex.png';
import { useDispatch, useSelector } from 'react-redux';
import Admin from '../AdminPage';
import { exit } from '../../../redux/features/application';
import { Link } from 'react-router-dom';
import {
  deleteAvatar,
  editAvatar,
  editProfile,
  fetchIdUser,
} from '../../../redux/features/user';
import { deleteTour, fetchTours } from '../../../redux/features/tours';
import { fetchBookingUser } from '../../../redux/features/booking';
import { Button } from '@mui/material';

const TestProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(fetchIdUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBookingUser());
  }, [dispatch]);

  const [modalEditImage, setModalEditImage] = useState(false);
  const [modalEditProfile, setModalEditProfile] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [drag, setDrag] = useState(false);

  const role = useSelector((state) => state.application.role);
  const dataUser = useSelector((state) => state.user.data);
  const id = useSelector((state) => state.application.id);

  const currentUser = dataUser.length
    ? dataUser.find((item) => item._id === id)
    : {};

  if (role === 'admin') {
    return <Admin />;
  }

  const exitUser = () => {
    dispatch(exit());
  };

  function handleModalEditAvatar() {
    setModalEditImage(!modalEditImage);
  }

  function handleClickEditAvatar() {
    dispatch(editAvatar(image));
    setModalEditImage(false);
  }

  function handleClickDeleteAvatar() {
    dispatch(deleteAvatar());
    setModalEditImage(false);
  }

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setImage(file);
  }

  function handleClickEditProfile() {
    setModalEditProfile(!modalEditProfile);
  }

  function handleClickCancelEditProfile() {
    setModalEditProfile(!modalEditProfile);
  }

  function handleClickEditProfileAdd() {
    dispatch(editProfile(firstName, lastName, age));
    setFirstName('');
    setLastName('');
    setAge('');
    setModalEditProfile(!modalEditProfile);
  }

  return (
    <div className="col-4">
      <div>
        <div
          className="shadow-sm p-3 mb-5 bg-body rounded"
          style={{
            width: '330px',
            height: '300px',
            margin: 'auto',
          }}
        >
          <img
            src={`http://localhost:3030/${dataUser.image}`}
            onClick={handleModalEditAvatar}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '2px',
              cursor: 'pointer',
            }}
          />
        </div>
        <div className="mb-3">
          {modalEditImage ? (
            <>
              {drag ? (
                <div
                  onDragStart={(e) => dragStartHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragOver={(e) => dragStartHandler(e)}
                  onDrop={(e) => onDropHandler(e)}
                  style={{
                    margin: '0 45px 0',
                    width: '320px',
                    height: '250px',
                    border: '5px dashed black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Отпустите файл, чтобы загрузить
                </div>
              ) : (
                <div
                  style={{
                    margin: '0 45px 0',
                    width: '320px',
                    height: '250px',
                    border: '5px dashed black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onDragStart={(e) => dragStartHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragOver={(e) => dragStartHandler(e)}
                >
                  Перетащите файл, чтобы загрузить
                </div>
              )}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  margin: '5px 0 0',
                }}
              >
                <Button
                  disabled={!image}
                  onClick={handleClickEditAvatar}
                  type="primary"
                  style={{ color: 'black' }}
                >
                  Загрузить
                </Button>
                <Button
                  onClick={handleClickDeleteAvatar}
                  style={{ color: 'black' }}
                  type="primary"
                >
                  Удалить
                </Button>
              </div>
            </>
          ) : null}

          {/* <label
            for="formFileDisabled"
            className="form-label"
            style={{ marginLeft: '60px' }}
          >
            Изменить аватарку
          </label> */}
          {/* <input
            onChange={(e) => setImage(e.target.files[0])}
            className="form-control"
            type="file"
            id="formFileDisabled"
          /> */}
          {modalEditProfile ? (
            <form>
              <div className="form-row">
                <div className="col">
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ border: 'none' }}
                    type="text"
                    className="form-control shadow-sm p-3 mb-5 bg-body rounded"
                    placeholder="First name"
                  />
                </div>
                <div className="col">
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{ border: 'none' }}
                    type="text"
                    className="form-control shadow-sm p-3 mb-5 bg-body rounded"
                    placeholder="Last name"
                  />
                </div>
                <div className="col">
                  <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    style={{ border: 'none' }}
                    type="text"
                    className="form-control shadow-sm p-3 mb-5 bg-body rounded"
                    placeholder="Age"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '1px 0 0',
                  }}
                >
                  <Button
                    onClick={handleClickEditProfileAdd}
                    style={{ color: 'black' }}
                  >
                    Сохранить
                  </Button>
                  <Button
                    onClick={handleClickCancelEditProfile}
                    style={{ color: 'black' }}
                  >
                    Отменить
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            <>
              <p
                onClick={handleClickEditProfile}
                className="shadow-sm p-3 mb-5 bg-body rounded"
                style={{ cursor: 'pointer' }}
              >
                Имя: {dataUser.firstName}
              </p>
              <p
                onClick={handleClickEditProfile}
                className="shadow-sm p-3 mb-5 bg-body rounded"
                style={{ cursor: 'pointer' }}
              >
                Фамилия: {dataUser.lastName}
              </p>
              <p
                onClick={handleClickEditProfile}
                className="shadow-sm p-3 mb-5 bg-body rounded"
                style={{ cursor: 'pointer' }}
              >
                Возраст: {dataUser.age}
              </p>
            </>
          )}
        </div>
      </div>

      <Link to="/">
        <div
          style={{
            cursor: 'pointer',
            width: '35px',
            position: 'fixed',
            bottom: '30px',
            right: '50px'
          }}
          onClick={exitUser}
        >
          <img src={exitLogo} alt="" style={{ width: '100%' }} />
        </div>
      </Link>
    </div>
  );
};

export default TestProfile;
