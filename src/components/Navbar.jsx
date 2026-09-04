import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate("/")
    }


    return (
        <nav className="flex gap-5 h-15 items-center justify-center">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>

            {user ? (
                <>
                    <Link to="/posts/create">Create post</Link>
                    <span>Hello, {user.username}</span>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}

        </nav>
    )
}