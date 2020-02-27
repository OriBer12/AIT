import React from 'react';
import Header from './components/Header/header';
import Content from './pages/Content/Content';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb, faUsers, faEnvelope, faBell, faUniversity } from '@fortawesome/free-solid-svg-icons';


library.add(faEnvelope, faLightbulb, faUsers, faBell,faUniversity)

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
