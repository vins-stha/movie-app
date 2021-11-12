import './App.css';
import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './Head/Navbar';

import Body from './Body/Body';
import Series from './Body/Series';
import ListByGenre from './Body/ListByGenre';
import Trending from './Body/Trending';

import Footer from './Footer/Footer';


function App() {
  const [genre, setGenre] = useState('popularity')

  return (
      <div className="App">

        <BrowserRouter>
          <Navbar/>
          <Footer/>
          <Route path="/" component={Body} exact></Route>
          <Route path="/trending" component={Trending} exact></Route>
          <Route path="/popular" component={Body} exact></Route>
          <Route path="/series" component={Series} exact></Route>
          <Route path="/listByGenre" component={ListByGenre} exact></Route>

        </BrowserRouter>

      </div>
  );
}

export default App;
