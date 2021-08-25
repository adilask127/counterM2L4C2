import React,{useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const formCount = () => {
        return count === 0 ? <h1>"Ноль"</h1>: count;
    }

    const getBageClasses = () => {
        let classes = "badge m-2 bg-"
        classes += count === 0 ? "danger" : "primary";
        return classes;
    }

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        debugger;
        if (count) {
            setCount(count - 1);
        }
    }

    return ( 
    <>
        <span className={getBageClasses()}> {formCount()}</span> 
        <button 
            onClick= {handleIncrement} 
            className = "btn btn-secondary btn-sm">Increment
        </button>
        <button 
            onClick= {handleDecrement} 
            className = "btn btn-secondary btn-sm">Decrement
        </button>    
    </>);
}
 
export default Counter;