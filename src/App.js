import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Routes } from './components/Routes';
import { Footer } from './components/Footer';
 
const App = () => {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
     <div className={darkTheme ? 'dark' : ''}>
       <div className="bg-gray-200 dark:bg-gray-800 dark:text-gray-200 min-h-screen">
         <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
         <Routes />
         <Footer />
       </div>
      
       
  </div>
  );
}

export default App;
