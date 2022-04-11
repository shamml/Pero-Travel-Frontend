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
  fetchIdUser,
} from '../../../redux/features/user';
import { deleteTour, fetchTours } from '../../../redux/features/tours';
import { fetchBookingUser } from '../../../redux/features/booking';
import { Button } from '@mui/material';

const TestProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIdUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBookingUser());
  }, [dispatch]);

  const [modalEditImage, setModalEditImage] = useState(false);
  const [image, setImage] = useState('');
  const [drag, setDrag] = useState(false);

  const role = useSelector((state) => state.application.role);

  const dataUser = useSelector((state) => state.user.data);

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
        </div>
        <p className="shadow-sm p-3 mb-5 bg-body rounded">
          Имя: {dataUser.firstName}
        </p>
        <p className="shadow-sm p-3 mb-5 bg-body rounded">
          Фамилия: {dataUser.lastName}
        </p>
        <p className="shadow-sm p-3 mb-5 bg-body rounded">
          Возраст: {dataUser.age}
        </p>
      </div>
      <Link to="/">
        <div
          style={{
            cursor: 'pointer',
            width: '35px',
            height: '35px',
            margin: '0 350px 0',
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
