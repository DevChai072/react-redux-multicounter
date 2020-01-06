import React, { useState } from 'react'
import { connect } from 'react-redux'
import ListCounterView from '../components/ListCounterView'
import {
    changeScore,
    incrementCounter,
    decrementCounter,
    deleteCounter
} from '../actions/CounterAction'

const ListCounter = ({counts, dispatch}) => {

    const handleClickIncrement = (id, score) => {
        dispatch(incrementCounter(id, score))
    }

    const handleClickDecrement = (id, score) => {
        dispatch(decrementCounter(id, score))
    }

    const handleChangeInput = (id, score) => {
        dispatch(changeScore(id, score))
    }

    const handleClickDeleteCounter = (id) => {
        dispatch(deleteCounter(id))
    }

    const propsEvent = {
        handleChangeInput: handleChangeInput,
        handleClickIncrement: handleClickIncrement,
        handleClickDecrement: handleClickDecrement,
        handleClickDeleteCounter: handleClickDeleteCounter
    }

    return (
        <>
            {counts.map(item =>
                <ListCounterView key={item.id} {...item} propsEvent={propsEvent}/>
            )}
        </>
    )
}

const mapStateToProps = (state) =>  ({
	message: 'This is message from mapStateToProps',
	counts: state.counterReducer.multiCounter
})
export default connect(mapStateToProps)(ListCounter)