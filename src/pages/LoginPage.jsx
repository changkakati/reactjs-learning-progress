import { useState } from "react";
import { useNavigate} from "react-router-dom"
import { loginUser } from "../api/auth";
import { useAuth } from "../hooks/useAuth";



export default function RegisterPage() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()

    const {login} = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            setError("")

            const data = await loginUser(username,password)
            login(data.user,data.token)
            navigate("/")

        } catch (err) {
            setError(err.message)

        } finally {
            setLoading(false)

        }

        
    }

    return (
        <>
            <h2>Login</h2>

            {error && <p>{ error}</p>}


            <form onSubmit={handleSubmit}>
                <input placeholder="Username" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
                <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </>
    )


}