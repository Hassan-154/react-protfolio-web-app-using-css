import React, { Component } from 'react';
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import Footer from './components/Footer'
import About from './components/About'
import Menu from './components/Menu'
import Dining from './components/Dining'
import Contact from './components/Contact'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Hero/>
      <Menu/>
      <About/>
      <Dining/>
      <Login/>
      <Contact/>
      <Footer/>
      </>
    );
  }
}

export default App;