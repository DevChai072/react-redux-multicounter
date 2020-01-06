import React from 'react'
import { connect } from 'react-redux'
import AddCounterView from '../components/AddCounterView'
import uuid from 'uuid'
import {
    addCounter
} from '../actions/CounterAction'

const AddCounter = ({dispatch}) => {

    const handleClickAddCounter = () => {
        dispatch(addCounter())
    }

    return (
        <AddCounterView handleClickAddCounter={handleClickAddCounter}/>
    )
}

export default connect()(AddCounter)