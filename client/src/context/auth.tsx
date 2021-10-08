import React, { useState, useReducer, useContext, createContext } from 'react';

type Action = {
    type: 'setToken',
    token: string;
}

type Dispatch = (action: Action) => void;

// type User = {
//     token: string;
// } | null;

type AuthToken = string | null;

type AuthProviderProps = { children: React.ReactNode };

type State = {
    //user: User,
    authToken: AuthToken
}

const AuthStateContext = createContext<
    {
        // user: User,
        authToken: AuthToken,
        authDispatch: Dispatch,
    } | undefined
>(undefined);

const initialValues = {
    user: null,
    authToken: null,
} as State;

function authReducer(state: State, action: Action) {
    switch (action.type) {
        case 'setToken': {
            if (action.token) {
                localStorage.setItem("token", action.token);
                return {
                    authToken: action.token
                }
            }
            return {
                authToken: null
            };
        }
        default: throw new Error('Unhandled action type'); 
    }
}

function AuthProvider({ children }: AuthProviderProps) {
    const existingToken = localStorage.getItem('token');
    const [state, dispatch] = useReducer(authReducer, initialValues);
    const value = {
        authToken: state.authToken,
        authDispatch: dispatch
    }
    return (
        <AuthStateContext.Provider value={value}>
            {children}
        </AuthStateContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}

export { AuthProvider, useAuth };
