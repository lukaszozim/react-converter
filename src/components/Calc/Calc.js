import React, {useState, useEffect} from 'react'
import {Button} from '../Button'

//usunięcie state
/*state = {
    amount:0,
    currFrom:'PLN',
    currTo:'EUR'
}*/

function Select({value, setValue}){
    const [curr, setCurr] = useState([])
    useEffect(()=>{
        fetch('https://api.ratesapi.io/api/latest?base=PLN')
        .then(response => response.json())
        .then(data=>{setCurr(Object.keys(data.rates))});

    return()=>{
        //clear
    }
        }, []);
    return(
    <select value ={value} onChange={(event)=>setValue(event.target.value)}>
        {curr.map((elem)=>
            <option value={elem}>{elem}</option>
        )}
        <option>DOL</option>
        <option>PLN</option>
        <option>EUR</option>
    </select>
);
}

function Calc(){
    const [result, setResult] = useState(0);
    const [amount, setAmount] = useState(0);
    const [currFrom, setCurrFrom] = useState('PLN');
    const [currTo, setCurrTo] = useState('EUR');
    const handleSubmit = (event) =>{
        event.preventDefault();
        fetch('https://api.ratesapi.io/api/latest?base=' + currFrom)
        .then(response => response.json())
        .then(data=>{setResult(amount * data.rates[currTo])})
        console.log(event)}
    return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="number" onChange={(event)=>setAmount(event.target.value)}/>
        </div>
        <Select value={currFrom} setValue={setCurrFrom}/>
        <div>
            
        </div>
        <div>
        <Select value={currTo} setValue={setCurrTo}/>
        </div>
        <div>
            Result: {`${result} ${currTo}`} 
        </div>
        <Button type="submit">Send</Button>
    </form>
    );
}

export default Calc;