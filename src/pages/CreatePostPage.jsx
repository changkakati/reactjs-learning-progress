import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { createPost } from "../api/posts"
import PostForm from "../components/PostForm"

export default function CreatePost() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate()

  async function handleCreate(formData) {
    try {
      setLoading(true)
      setError("")

      await createPost(formData)

      navigate("/posts")

    } catch (err) {
      setError(err.message || "Something went wrong")

    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Create Post</h1>

      {error && <p>{error}</p>}

      {loading ? (
        <p>Creating...</p>
      ) : (
        <PostForm onSubmit={handleCreate} buttonText="Create Post" />
      )}

    </div>
  )
}