import React, { useState } from 'react';
import Logo from './components/Logo';
import MainPage from './components/MainPage';

const App = () => {

  return (
    <div style={{
      background: 'black',
      color: 'white',
      height: '100vh',
      width: '100vw',
    }}>
      <MainPage />
      <Logo />
    </div>
  );
}

export default App;
