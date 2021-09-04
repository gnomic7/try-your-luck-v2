import React from 'react';
import { MainHeader } from '../MainHeader';
import { MainBoard } from '../MainBoard';
import { ScoreBoard } from '../ScoreBoard';

import './App.css';
const AppComponent = () => (
  <>
    <section className="mainContent">
      <MainHeader />
      <MainBoard />
    </section>
    <aside>
      <ScoreBoard />
    </aside>
  </>
);

const App = () => <AppComponent />;

export default App;
