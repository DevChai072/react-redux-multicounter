const initialState = {
    multiCounter: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return {
                ...state,
                multiCounter: [
                    ...state.multiCounter,
                    {
                        id: action.id,
                        count: 0,
                        score: ""
                    }
                ]
            }

        case 'CHANGE_SCORE':
            return {
                ...state,
                multiCounter: state.multiCounter.map(item => 
                        (item.id === action.payload.id)
                        ? {...item, score: action.payload.score}
                        : item
                    )
            }

        case 'INCREMENT':
            return {
                ...state,
                multiCounter: state.multiCounter.map(item => 
                        (item.id === action.payload.id)
                        ? {...item, count: item.count + parseInt(action.payload.count)}
                        : item
                    )
            }

        case 'DECREMENT':
            return {
                ...state,
                multiCounter: state.multiCounter.map(item => 
                        (item.id === action.payload.id)
                        ? {...item, count: item.count - parseInt(action.payload.count)}
                        : item
                    )
            }

        case 'DELETE_COUNTER':
            return {
                ...state,
                multiCounter: state.multiCounter.filter(item => item.id !== action.id)
            }

        default:
            return state
    }
}