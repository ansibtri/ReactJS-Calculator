import React, { useState } from 'react';


function App() {
  const [value, setValue] = useState('');
  const handleValue = (e) => {
    setValue(value + e.target.value);
  }
  const clear = (e) => {
    e.preventDefault();
    setValue('');
  }
  const calculate = () => {
    try {
      setValue(eval(value))
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert(e.message);
      } else {
        throw e;
      }
    }
  }
  return (
    <>
      <div className='container'>
        <div>
          <input type="text" value={value} onChange={handleValue} />
        </div>
        <div className="button-frame">
          <button className="btn" value='(' onClick={handleValue}>(</button>
          <button className="btn" value=')' onClick={handleValue}>)</button>
          <button className="btn" value='c' onClick={clear}>C</button>
          <button className="btn" value='%' onClick={handleValue}>%</button>
          <button className="btn" value='7' onClick={handleValue}>7</button>
          <button className="btn" value='8' onClick={handleValue}>8</button>
          <button className="btn" value='9' onClick={handleValue}>9</button>
          <button className="btn" value='*' onClick={handleValue}>×</button>
          <button className="btn" value='4' onClick={handleValue}>4</button>
          <button className="btn" value='5' onClick={handleValue}>5</button>
          <button className="btn" value='6' onClick={handleValue}>6</button>
          <button className="btn" value='/' onClick={handleValue}>÷</button>
          <button className="btn" value='1' onClick={handleValue}>1</button>
          <button className="btn" value='2' onClick={handleValue}>2</button>
          <button className="btn" value='3' onClick={handleValue}>3</button>
          <button className="btn" value='+' onClick={handleValue}>+</button>
          <button className="btn" value='0' onClick={handleValue}>0</button>
          <button className="btn" value='.' onClick={handleValue}>.</button>
          <button className="btn" value='-' onClick={handleValue}>-</button>
          <button className="btn" value='=' onClick={calculate}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
