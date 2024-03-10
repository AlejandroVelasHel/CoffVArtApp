import {createContext, useContext, useEffect, useReducer} from "react";
import {authReducer} from "./authReducer";
import * as SecureStore from 'expo-secure-store';

const initialState = {
    user: null, token: null, isAuth: false,
}

const AuthContext = createContext({
    user: null, login: () => {
    }, logout: () => {
    }, isAuth: false,
});

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState, async () => {
        const {user, token} = await SecureStore.getItemAsync('user')
        return user ? {user, isAuth: true, token} : initialState
    })

    const login = async ({user, token}) => {
        const payload = {user, token}
        if (user && token) {
            await SecureStore.setItemAsync('user', JSON.stringify(payload))
            dispatch({type: 'LOGIN', payload})
        }
    }

    const logout = async () => {
        await SecureStore.deleteItemAsync('user')
        dispatch({type: 'LOGOUT', payload: {}})
    }

    useEffect(() => {
        const checkToken = async () => {
            const {user, token} = await SecureStore.getItemAsync('user')
            if (user && token) {
                dispatch({type: 'LOGIN', payload: {user, token}})
            }
        }
        checkToken()
    }, [])

    return (
        <AuthContext.Provider value={{user: state.user, token: state.token, isAuth: state.isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}