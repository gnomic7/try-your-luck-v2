import React, { createContext, useState } from 'react';
import { WithLayout } from '../WithLayout';

import App from './App';
export const ScoreBoardContext = createContext(null);

const AppContainer = WithLayout(() => {
  const [scoreBoard, setScoreBoard] = useState([]);

  return (
    <ScoreBoardContext.Provider value={[scoreBoard, setScoreBoard]}>
      <App />
    </ScoreBoardContext.Provider>
  );
});

export default AppContainer;
