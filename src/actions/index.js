import { AUTH } from "../reducers/authReducer";

export function login(authState) {
    return {
        type: AUTH,
        payload: authState
    }
}