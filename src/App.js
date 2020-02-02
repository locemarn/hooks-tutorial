import React from 'react';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import ArrayState from './components/ArrayState'
import './App.css';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <ArrayState />
    </div>
  );
}

export default App;
