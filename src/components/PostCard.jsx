import { Link } from "react-router-dom";

export default function PostCard({ post }) {
    return (
        <div className="border p-5 my-5 flex flex-col gap-2">
            <h2 className="text-2xl">{ post.title}</h2>
            <p>{ post.body}</p>
            {post.image && (
                <img className="w-50" src={`http://localhost:3000/uploads/${post.image}`} alt={ post.title} />
            )}
            <Link to={`/posts/${post.id}`}>View post</Link>
        </div>
    )
}