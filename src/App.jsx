import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './Context/UserContext';
import BackToTop from './components/Other/BackToToButton';

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Outlet />
        <Footer />
        <BackToTop />
      </UserProvider>
    </>
  );
}

export default App;
