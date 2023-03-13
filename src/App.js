import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
//import Main from './components/Main';
import Footer from './components/Footer';
import { useContext } from 'react'
import  {ThemeContext}  from './components/ThemeContext'
import Films from './components/Films';
import Detail from './components/Detail';
import Contact from './components/Contact';
import FilmsPresentaion from './components/FilmsPresentation';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import News from './components/News';

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div class='App' style={{
      backgroundColor: theme.backgroundColor, color: theme.color
    }}>
      <Navigation />
      <Routes >
        <Route path='/' element={<Films />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
