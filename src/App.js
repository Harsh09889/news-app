import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
        <NavBar/>   
        <Routes>
        <Route path="/"   element={<News key={'general'} pageSize={3} country='in' category='general' />}/>
          <Route path="/business"   element={<News key={'business'} pageSize={3} country='in' category='business' />}/>
          <Route path="/entertainment"   element={<News key={'entertainment'} pageSize={3} country='in' category='entertainment' />}/>
          <Route path="/health"   element={<News key={'health'} pageSize={3} country='in' category='health' />}/>
          <Route path="/science"   element={<News key={'science'} pageSize={3} country='in' category='science' />}/>
          <Route path="/sports"   element={<News key={'sports'} pageSize={3} country='in' category='sports' />}/>
          <Route path="/technology"   element={<News key={'technology'} pageSize={3} country='in' category='technology' />}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
