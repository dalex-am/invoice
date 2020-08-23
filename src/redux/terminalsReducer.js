const ADD_TERMINAL = 'ADD_TERMINAL'
const DELETE_TERMINAL = 'DELETE_TERMINAL'

let initialState = {
    terminals: [
        {id: 1, terminal: 'Терминал №1', description: 'Описание терминала'},
        {id: 2, terminal: 'Терминал №2', 
        description: 'Совершенно другое описание терминала. Длинное такое описание. Чтобы пару строчек заняло'},
        {id: 3, terminal: 'Терминал №4', description: 'А куда потеряли терминал №3, а?'}        
    ],
    lastId: 3
}

const terminalsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TERMINAL:
            let id = state.lastId + 1
            return {
                ...state,
                lastId: id,
                terminals: [...state.terminals, {id: id, terminal: action.terminal, description: action.description}] 
                }
        case DELETE_TERMINAL:
            return {
                ...state,
                terminals: [...state.terminals.filter(elem => elem.id !== action.id)] 
            }
        default:
            return state;
    }
}

export const addTerminal = (terminal, description) => {
    return {type: ADD_TERMINAL, terminal, description}
}

export const deleteTerminal = (id) => {
    return {type: DELETE_TERMINAL, id}
}


export default terminalsReducer