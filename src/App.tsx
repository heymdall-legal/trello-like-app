import React from 'react';
import './App.css';
import { useStateSelector } from './store';

function App() {
  const columns = useStateSelector((state) => state.columns);

  return (
    <div className="App">
        <pre>{JSON.stringify(columns)}</pre>
    </div>
  );
}

export default App;
