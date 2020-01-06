import uuid from 'uuid'

export const addCounter = () => ({
    type: "ADD_COUNTER",
    id: uuid()
})

export const changeScore = (id, score) => ({
    type: "CHANGE_SCORE",
    payload: {
        id: id,
        score: score
    }
})

export const incrementCounter = (id, count) => ({
    type: "INCREMENT",
    payload: {
        id: id,
        count: count
    }
})

export const decrementCounter = (id, count) => ({
    type: "DECREMENT",
    payload: {
        id: id,
        count: count
    }
})

export const deleteCounter = (id) => ({
    type: "DELETE_COUNTER",
    id
})