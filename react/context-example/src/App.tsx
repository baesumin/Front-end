import React from 'react';
import { CountLabel } from './components/CountLabel';
import { OtherComponents } from './components/OtherComponents';
import { PlusButton } from './components/PlusButton';
import { CountProvider } from './contexts/Count';
import { OtherProvider } from './contexts/OtherContext';

interface Props {
  contexts:any,
  children:JSX.Element | JSX.Element[];
}

const ContextProvider = ({contexts, children}:Props) => contexts.reduce(
  (prev:any, context:any) => React.createElement(context, {
    children: prev
  }), 
  children
)

function App() {
  return (
    <ContextProvider contexts={[CountProvider,OtherProvider]}>
      <CountLabel />
      <PlusButton />
      <OtherComponents />
    </ContextProvider>
  );
}

export default App;
