import React, { Component } from 'react';
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import Footer from './components/Footer'
import About from './components/About'
import Menu from './components/Menu'
import Feed from './components/Feed'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Hero/>
      <Menu/>
      <About/>
      <Feed/>
      <Contact/>
      <Footer/>
      </>
    );
  }
}

export default App;