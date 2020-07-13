import React from 'react';
import 'normalize.css'
import './styles/styles.scss';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
    <Homepage />
    <Footer />
    </>
  );
}

export default App;
