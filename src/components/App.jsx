import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Excursions from './pages/Excursions';
import Admin from './pages/AdminPage';
import Tours from './pages/Tours';
import Profile from './pages/Profile';
import Footer from './Footer';
import './styles.css';
import { useSelector } from 'react-redux';
import './transition.css';

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
  const role = useSelector((state) => state.application.role);
  return token && role === 'admin' ? (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/tours/:id" element={<Tours />} />
        <Route path="/excursions" element={<Excursions items={items} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/*<Footer />*/}
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
      {/* <Footer /> */}
    </div>
  );
};

export default App;
