import { createContext, Dispatch, ReactNode, useContext, useState } from "react";

interface AuthContextProps{
    isAuthenticated: boolean
    setIsAuthenticated: Dispatch<React.SetStateAction<boolean>>
}
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);


interface AuthContextProvider {
    children: ReactNode;
}

export function AuthContextProvider({ children }:AuthContextProvider) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    return(
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthProvider(): AuthContextProps {
    return useContext(AuthContext);
}