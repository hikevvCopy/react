export const AUTH = 'AUTH';

const initialState = {
    auth: false
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH: {
            return { ...state, auth: action.payload }
        }
        default: {
            return state
        }
    }
}