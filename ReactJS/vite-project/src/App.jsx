import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
  return (
    <>
      <Header name="Prince" />
      <Main content={false} />
      <Footer />
    </>
  );
};

export default App;
