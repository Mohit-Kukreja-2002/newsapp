import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Now we will be using the Class based react app
// type==> rcc

export default class App extends Component {
  pageSize=6;
  apikey=process.env.REACT_APP_APIKEY;
  country='in';
  state={
    progress:0
  }

  // using arrow function makes us possibe to use this.
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <Router>
        <>
        <div>
        <Navbar/>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="/" pagesize={this.pageSize} country={this.country} category="general" />}> </Route>
          <Route exact path="/home" element={<News setProgress={this.setProgress} apikey={this.apikey} key="home" pagesize={this.pageSize} country={this.country} category="general" />}> </Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pagesize={this.pageSize} country={this.country} category="business" />}> </Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pagesize={this.pageSize} country={this.country} category="entertainment" />}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={this.pageSize} country={this.country} category="general" />}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pagesize={this.pageSize} country={this.country} category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pagesize={this.pageSize} country={this.country} category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pagesize={this.pageSize} country={this.country} category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pagesize={this.pageSize} country={this.country} category="technology" />}></Route>
        </Routes>
        </div>
        </>
      </Router>


    )
  }
}
