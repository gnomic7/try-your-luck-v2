import React from 'react';
import { MainHeader } from '../MainHeader';
import { MainBoard } from '../MainBoard';
import { ScoreBoard } from '../ScoreBoard';

import './App.css';

const App = () => (
  <div className="main">
    <MainHeader />
    <div className="mainContent">
      <MainBoard />
      <ScoreBoard />
    </div>
  </div>
);

export default App;
