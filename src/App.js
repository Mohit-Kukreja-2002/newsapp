import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Now we will be using the Class based react app
// type==> rcc

export default class App extends Component {
  render() {
    return (
      <Router>
        <>
        <div>
          <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="/" pagesize={6} country="in" category="general" />}> </Route>
          <Route exact path="/home" element={<News key="home" pagesize={6} country="in" category="general" />}> </Route>
          <Route exact path="/business" element={<News key="business" pagesize={6} country="in" category="business" />}> </Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pagesize={6} country="in" category="entertainment" />}></Route>
          <Route exact path="/general" element={<News key="general" pagesize={6} country="in" category="general" />}></Route>
          <Route exact path="/health" element={<News key="health" pagesize={6} country="in" category="health" />}></Route>
          <Route exact path="/science" element={<News key="science" pagesize={6} country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<News key="sports" pagesize={6} country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News key="technology" pagesize={6} country="in" category="technology" />}></Route>
        </Routes>
        </div>
        </>
      </Router>


    )
  }
}
