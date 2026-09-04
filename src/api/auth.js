const API_URL = "http://localhost:3000/api/auth"

export async function registerUser(username,password) {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            username,password
        })
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.error || "Registration failed")

    }

    return data
    
}


export async function loginUser(username,password) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            username,password

        })

    })
    const data = await response.json()
    if (!response.ok) {
        throw new Error(data.error || "Login failed")

    }
    return data

}

export async function logoutUser() {
    const response = await fetch(`${API_URL}/logout`, {
        method:"POST"
    })

    return response.json()
    
}