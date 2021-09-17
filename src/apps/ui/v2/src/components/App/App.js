import React, { Suspense } from 'react';
import { MainHeader } from '../MainHeader';
import { MainBoard } from '../MainBoard';
import { ScoreBoard } from '../ScoreBoard';

import './App.css';
const AppComponent = () => (
  <>
    <section className="mainContent">
      <MainHeader />
      <Suspense fallback={<h2>Warming up!</h2>}>
        <MainBoard />
      </Suspense>
    </section>
    <Suspense fallback={<div className="memberItem">No members yet</div>}>
      <aside>
        <ScoreBoard />
      </aside>
    </Suspense>
  </>
);

const App = () => <AppComponent />;

export default App;
