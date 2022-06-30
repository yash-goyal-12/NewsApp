import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"

const App = ()=> {
  const pageSize = 18;
  const apiKey = "823b6c540f8c41dabf0ab1bd6cb6d1ef";
    return (
      <div>
       <Router>
        <Navbar/>
        <Routes>
      <Route exact path="/"  element={<News pageSize= {pageSize} apiKey = {apiKey} key="general" country ="in" category = "general"/>}/>
      <Route exact path="/entertainment"  element={<News pageSize= {pageSize} apiKey = {apiKey} key="entertainment" country ="in" category = "entertainment"/>}/>
      <Route exact path="/business"  element={<News pageSize= {pageSize} apiKey = {apiKey} key="business" country ="in" category = "business"/>}/>
      <Route exact path="/health"  element={<News pageSize= {pageSize} apiKey = {apiKey} key="health" country ="in" category = "health"/>}/>
      <Route exact path="/sports" element={<News pageSize= {pageSize} apiKey = {apiKey}  key="sports" country ="in" category = "sports"/>}/>
      <Route exact path="/technology"  element={<News pageSize= {pageSize} apiKey = {apiKey} key="technology" country ="in" category = "technology"/>}/>
      <Route exact path="/science"  element={<News pageSize= {pageSize} apiKey = {apiKey} key="science" country ="in" category = "science"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }


  export default App;
