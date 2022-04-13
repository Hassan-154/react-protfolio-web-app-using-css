// Latest Commit
import React, { Component } from 'react';
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import HeaderSection from './components/HeaderSection';
import NavBar from './components/NavBar';
import Project from './components/Project';

class App extends Component {
  render() {
    return (
      <div className="app">
      <NavBar/>
      <HeaderSection/>
      <About/>
      <Project/>
      <Contact/>
      </div>
    );
  }
}

export default App;