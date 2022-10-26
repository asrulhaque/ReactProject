
import './App.css';
import { useState } from 'react';
import CounterInput from './CounterInput/CounterInput';
import CounterButton from './CounterButton/CounterButtton';
import CounterDisplay from './CounterDisplay/CounterDisplay';

function App() {
  const [getCounter, setCounter]=useState(0);
  const onChangeHandler = (input) =>{
    setCounter(input);
  }
  const onIcrementHandler =()=>{
    setCounter(getCounter+1);
  }
  const onDecrementHandler =()=>{
    setCounter(getCounter-1);
  }
  return (
<div className='demo'>
  <div className="App">
      <CounterInput onChangeHandler={onChangeHandler}/>
      <CounterButton onIcrementHandler={onIcrementHandler} onDecrementHandler={onDecrementHandler}/>
      <CounterDisplay counter ={getCounter}/>
    </div>
</div>
  );
}

export default App;
