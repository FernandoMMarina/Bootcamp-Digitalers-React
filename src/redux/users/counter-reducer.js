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