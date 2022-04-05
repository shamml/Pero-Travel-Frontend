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

const App = () => {
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
        <Route path="/excursions" element={<Excursions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  ) : (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/tours/:id" element={<Tours />} />
        <Route path="/excursions" element={<Excursions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
