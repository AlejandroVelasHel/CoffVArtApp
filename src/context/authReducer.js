export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuth: true,
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                token: null,
                isAuth: false,
            }
        default:
            return state
    }
}