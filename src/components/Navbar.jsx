import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex gap-5 h-15 items-center justify-center">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/posts/create">Create Posts</Link>
        </nav>
    )
}