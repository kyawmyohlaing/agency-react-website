const defaultState = {
    user: {},
    token: null,

}

const auth = (state = defaultState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                token: action.payload.token,
                console: null
                
            }
            case 'SHOW_ERROR':
                return {
                    ...state,
                    error: action.payload
                }
            default:
                return state
    }
}