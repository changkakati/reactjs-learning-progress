import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

import { getPost, deletePost } from "../api/posts"
import { useAuth } from "../hooks/useAuth"

export default function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const { user } = useAuth()
  const isOwner = user && post && user.id === post.user_id

  useEffect(() => {
    async function fetchPost() {
      try {
        const data = await getPost(id)

        setPost(data)

      } catch (err) {
        setError(err.message || "Something went wrong")

      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])


  async function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    )

    if (!confirmDelete) {
      return
    }

    try {
      await deletePost(id)

      navigate("/")

    } catch (err) {
      setError(err.message || "Failed to delete post")
    }
  }


  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }


  return (
    <div>

      <Link to="/posts">
        Back to Posts
      </Link>

      <h1>{post.title}</h1>

      <p>{post.body}</p>

      {post.image && (
        <img
          src={`http://localhost:3000/uploads/${post.image}`}
          alt={post.title}
          style={{ maxWidth: "400px" }}
        />
      )}

      <br />

      <br />

      {isOwner && (

        <>

          <Link to={`/posts/${id}/edit`}>
            Edit Post
          </Link>

          <br />

          <br />

          <button onClick={handleDelete}>
            Delete Post
          </button>
        </>
      )}

    </div>
  )
}