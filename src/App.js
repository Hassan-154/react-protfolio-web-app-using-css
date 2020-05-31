import React, { Component } from 'react';
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import Footer from './components/Footer'
import About from './components/About'
import Menu from './components/Menu'
import Dining from './components/Dining'
import Order from './components/Order'
import Service from './components/Service'

class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Hero/>
      <Menu/>
      <About/>
      <Dining/>
      <Service/>
      <Order/>
      <Footer/>
      </>
    );
  }
}

export default App;