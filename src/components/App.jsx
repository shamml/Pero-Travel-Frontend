import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.css';
import './transition.css';
import Header from './Header';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Excursions from './pages/Excursions';
import Tours from './pages/Tours';
import Profile from './pages/Profile';
import AddTour from './pages/Profile/AdminProfile/AdminWorking/AddTour';
import FetchTour from './pages/Profile/AdminProfile/AdminWorking/FetchTour';
import Bookings from './pages/Profile/AdminProfile/AdminWorking/Bookings';
import Footer from './Footer';

const App = () => {
  const items = [
    {
      text: '1 чел.',
    },
    {
      text: '2 чел.',
    },
    {
      text: '3 чел.',
    },
    {
      text: '4 чел.',
    },
    {
      text: '5 чел.',
    },
    {
      text: '6 чел.',
    },
    {
      text: '7 чел.',
    },
    {
      text: '8 чел.',
    },
    {
      text: '9 чел.',
    },
    {
      text: '10 чел.',
    },
    {
      text: '10+ чел.',
    },
  ];

  const token = useSelector((state) => state.application.token);

  return token ? (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/tours/:id" element={<Tours />} />
        <Route path="/excursions" element={<Excursions items={items} />} />
        <Route path="/profile/*" element={<Profile />}>
          <Route path="addTour" element={<AddTour />} />
          <Route path="allTours" element={<FetchTour />} />
          <Route path="bookedTours" element={<Bookings />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  ) : (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/tours/:id" element={<Tours />} />
        <Route path="/excursions" element={<Excursions items={items} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
