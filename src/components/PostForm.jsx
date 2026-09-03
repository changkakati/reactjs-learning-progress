import { useState } from "react"

export default function PostForm({
  initialData = {},
  onSubmit,
  buttonText
}) {
  const [title, setTitle] = useState(initialData.title || "")
  const [body, setBody] = useState(initialData.body || "")
  const [image, setImage] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData()

    formData.append("title", title)
    formData.append("body", body)

    if (image) {
      formData.append("image", image)
    }

    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>Title</label>

        <br />

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Body</label>

        <br />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <br />



      <div>
        <label>Image</label>

        <br />

        {initialData.image && (
          <>
            <p>Current Image:</p>

            <img
              src={`http://localhost:3000/uploads/${initialData.image}`}
              alt="Current post"
              style={{ maxWidth: "200px" }}
            />
          </>
        )}

        <br />

        <label>Change Image</label>

        <br />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>


      <br />

      <button type="submit">
        {buttonText}
      </button>

    </form>
  )
}