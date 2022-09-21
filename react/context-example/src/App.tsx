import React from 'react';
import { CountLabel } from './components/CountLabel';
import { PlusButton } from './components/PlusButton';
import { CountProvider } from './contexts/Count';



function App() {
  return (
    <CountProvider>
      <CountLabel />
      <PlusButton />
    </CountProvider>
  );
}

export default App;
