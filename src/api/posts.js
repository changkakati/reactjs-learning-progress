const API_URL = "http://localhost:3000/api/posts"

function getAuthHeaders() {
  const token = localStorage.getItem("token")

  return {
    Authorization: `Bearer ${token}`
  }
}

export async function getPosts() {
    const response = await fetch(`${API_URL}`)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()

}


export async function getPost(id) {
    const response = await fetch(`${API_URL}/${id}`)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return response.json()

}

export async function createPost(formData) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: getAuthHeaders(),
        body: formData
    })
    if (!response.ok) {
        throw new Error("Failed to create post")
    }
    return response.json()

}

export async function updatePost(id, formData) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: formData
    })

    if (!response.ok) {
        throw new Error("Failed to update post")
    }

    return response.json()

}

export async function deletePost(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
    })
    if (!response.ok) {
        throw new Error("Failed to delete post")

    }

    return response.json()
    
}