import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../api/auth"

export default function RegisterPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true)
            setError("")

            await registerUser(username, password)

            navigate("/login")

        } catch (err) {
            setError(err.message)

        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <h2>Register</h2>

            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>
        </>
    )
}