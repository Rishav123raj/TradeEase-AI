import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css"; 

// Components
import Header from './components/Header/Header';
import Hero from './components/container/Hero';
import List from './components/lists/List';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/scroll-on-top/scroll';

const App = () => {
  return (
    <Router>
      <ScrollToTopButton />
      <Header />
      <Hero />
      <List />
      <Footer />
    </Router>
  );
};

export default App;
