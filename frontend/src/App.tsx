import React from 'react';
import Header from './components/Header/header';
import Content from './pages/Content/Content';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb, faUsers,faUser ,faEnvelope, faBell, faUniversity, faEllipsisH, faMobile, faBriefcase, faDownload,faKeyboard } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter} from "react-router-dom";

library.add(faEnvelope, faLightbulb, faUsers, faBell,faUniversity, faEllipsisH, faMobile,faBriefcase,faDownload,faKeyboard,faUser)

function App() {
  return (

    <div className="App">
      <Header/>
      <Content/>
    </div>

  );
}

export default App;
