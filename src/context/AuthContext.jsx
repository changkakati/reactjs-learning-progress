import { createContext,useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user")
        if (savedUser) {
            return JSON.parse(savedUser)
        }
        return null
    })

    function login(userData, token) {
        localStorage.setItem("user",JSON.stringify(userData))
        localStorage.setItem("token",token)
        setUser(userData)
    }

    function logout() {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)

    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
    
}