import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Excursions from './pages/Excursions';
import Tours from './pages/Tours';
import Profile from './pages/Profile';
import Footer from './Footer';
import "./styles.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/excursions" element={<Excursions />} />
        <Route path="/profile" element={<Profile /> } />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
