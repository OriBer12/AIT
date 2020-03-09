import React from 'react';
import Header from './components/Header/header';
import Content from './pages/Content/Content';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm,faInfo,faAward,faLightbulb, faUsers,faUser ,faEnvelope, faBell, faUniversity, faEllipsisH, faMobile, faBriefcase, faDownload,faKeyboard, faTrophy } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter} from "react-router-dom";

library.add(faFilm,faInfo,faAward,faEnvelope, faLightbulb, faUsers, faBell,faUniversity, faEllipsisH, faMobile,faBriefcase,faDownload,faKeyboard,faUser,faTrophy)

function App() {
  return (

    <div className="App">
      <Header/>
      <Content/>
    </div>

  );
}

export default App;
