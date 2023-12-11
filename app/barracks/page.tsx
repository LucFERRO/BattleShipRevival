'use client'
import { useState } from "react";

export default function Barracks() {

    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
  
    const handleSubmit = (e :any) => {
      e.preventDefault();
      const postData = async () => {
        const data = {
          title: title,
          post: post,
        };
  
        const response = await fetch("/api/post", {
          method: "POST",
          body: JSON.stringify(data),
        });
        return response.json();
      };
      postData().then((data) => {
        alert(data.message);
      });
    }

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
  
        <div>Barracks </div>

        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="post">Post</label>
        <input
          id="post"
          type="text"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  
      </main>
    )
  }
  