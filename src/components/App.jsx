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
import AddTour from './pages/AdminPage/AdminWorking/AddTour';
import FetchTour from './pages/AdminPage/AdminWorking/FetchTour';
import Bookings from './pages/AdminPage/AdminWorking/Bookings';
import Footer from './Footer';

const App = () => {
  const token = useSelector((state) => state.application.token);

  return token ? (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/tours/:id" element={<Tours />} />
        <Route path="/excursions" element={<Excursions />} />
        <Route path="/profile/*" element={<Profile />}>
          <Route path="addTour" element={<AddTour />} />
          <Route path="fetchTour" element={<FetchTour />} />
          <Route path="booking" element={<Bookings />} />
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
        <Route path="/excursions" element={<Excursions />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
