import React from 'react'

const ListCounterView = ({id, count, score, propsEvent}) => {
    const {handleChangeInput, handleClickIncrement, handleClickDecrement, handleClickDeleteCounter} = propsEvent
    return (
        <div>
            <button onClick={() => handleClickIncrement(id, score)}>+</button>
            <input type="text" onChange={(evt) => handleChangeInput(id, evt.target.value)}/>
            <button onClick={() => handleClickDecrement(id, score)}>-</button>
            <label>{count}</label>
            <button onClick={() => handleClickDeleteCounter(id)}>Delete</button>
        </div>
    )
}
export default ListCounterView