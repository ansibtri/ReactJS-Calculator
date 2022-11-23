import React from 'react'

const Button = (props) => {
    return (
        <>
            <div className="button-frame">
                <button className="btn" value='(' onClick={props.handleValue}>(</button>
                <button className="btn" value=')' onClick={props.handleValue}>)</button>
                <button className="btn" value='c' onClick={props.clear}>C</button>
                <button className="btn" value='%' onClick={props.handleValue}>%</button>
                <button className="btn" value='7' onClick={props.handleValue}>7</button>
                <button className="btn" value='8' onClick={props.handleValue}>8</button>
                <button className="btn" value='9' onClick={props.handleValue}>9</button>
                <button className="btn" value='*' onClick={props.handleValue}>×</button>
                <button className="btn" value='4' onClick={props.handleValue}>4</button>
                <button className="btn" value='5' onClick={props.handleValue}>5</button>
                <button className="btn" value='6' onClick={props.handleValue}>6</button>
                <button className="btn" value='/' onClick={props.handleValue}>÷</button>
                <button className="btn" value='1' onClick={props.handleValue}>1</button>
                <button className="btn" value='2' onClick={props.handleValue}>2</button>
                <button className="btn" value='3' onClick={props.handleValue}>3</button>
                <button className="btn" value='+' onClick={props.handleValue}>+</button>
                <button className="btn" value='0' onClick={props.handleValue}>0</button>
                <button className="btn" value='.' onClick={props.handleValue}>.</button>
                <button className="btn" value='-' onClick={props.handleValue}>-</button>
                <button className="btn" value='=' onClick={props.calculate}>=</button>
            </div>
        </>
    )
}

export default Button