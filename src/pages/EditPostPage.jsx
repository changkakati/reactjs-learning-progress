import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { getPost, updatePost } from "../api/posts"
import PostForm from "../components/PostForm"

export default function EditPost() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

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


  async function handleUpdate(formData) {
    try {
      setError("")

      await updatePost(id, formData)

      navigate(`/posts/${id}`)

    } catch (err) {
      setError(err.message || "Something went wrong")
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
      <h1>Edit Post</h1>

      <PostForm
        initialData={post}
        onSubmit={handleUpdate}
        buttonText="Update Post"
      />

    </div>
  )
}