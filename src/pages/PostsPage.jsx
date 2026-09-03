import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getPosts } from "../api/posts"
import PostList from "../components/PostList"

export default function Home() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts()

        setPosts(data)

      } catch (err) {
        setError(err.message || "Something went wrong")

      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div>
      <h1>All Posts</h1>

      <Link to="/posts/create">
        Create New Post
      </Link>

      <PostList posts={posts} />
    </div>
  )
}