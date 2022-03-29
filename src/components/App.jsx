import React from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Excursions from './pages/Excursions';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/tours" element={<Excursions />} />
        <Route path="/excursions" element={<Excursions />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
