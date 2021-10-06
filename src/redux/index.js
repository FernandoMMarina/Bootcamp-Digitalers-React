let initialState = {
    counter: 0
};

const types = {
    SUMAR: 'sumar',
    RESTAR: 'restar',
    RESET : 'rest'
}

//reducer
const reducer = (state = initialState, action) => {

    switch(action.type) {
        case types.SUMAR: {
            state.counter += 1        
            break;
        }
        case types.RESTAR: {
            state.counter -= 1;
            break;    
        }
        case types.RESET:  {
            state.counter = 0
        }
    }

    //sale objeto
    return state;
}

//actions
const sumar = {
    type: types.SUMAR
}
const restar = {
    type: types.RESTAR
}
const reset = {
    type: types.RESET
}


let actualState = reducer({counter:10},sumar);

console.log(actualState.counter);

actualState = reducer(actualState, restar);

console.log(actualState.counter);

actualState = reducer(actualState, reset);

console.log(JSON.stringify(actualState));