// index app
import React, { useState } from 'react';
import SplashScreen from '@gluestack/app/Login/SplashScreen';
import { useEffect } from 'react';

const App = () => {
  const [first, setfirst] = useState(0);
  useEffect(() => {
    console.log('useEffect');
  }, [first]);

  return <SplashScreen />;
};

export default App;
