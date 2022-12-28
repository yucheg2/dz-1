import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id:0, value:0, name: 'bruh'},
        {id:1, value:4, name: 'Ложка'},
        {id:2, value:0, name: 'Вилка'},
        {id:3, value:0, name: 'Тарелка'},
        {id:4, value:0, name: 'Набор минималиста'},
    ]

    const [counters, setCounters] = useState(initialState)
    const handleDelete = (id) => {
        setCounters(counters.filter((count)=> count.id !==id))
    }

    const handleReset = () => {
        setCounters(initialState)
    }
    
    const handleIncrement = (id) => {
        setCounters(counters.map((c) => {
            if (id === c.id) {
                c.value += 1
                return c
            }
            return c
        }))
    }

    const handleDecrement = (id) => {
        setCounters(counters.map((c) => {
            if (id === c.id) {
                c.value -= 1
                return c
            }
            return c
        }))
    }

    return (<>
        {counters.map((counter) => {
            return (
            <Counter 
                key = {counter.id } 
                {...counter}
                onDelete= {handleDelete}
                onIncrement = {handleIncrement}
                onDecrement = {handleDecrement}/>
            )
        })}
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset} >Сброс</button>
    </>)
}

export default CountersList