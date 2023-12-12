'use client'
import { useState, useEffect } from "react";

export default function Barracks() {

  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const [playerList, setPlayerList] = useState('')

  useEffect(() => {
    fetch("/api/players", { method: "GET" })
      .then(res => res.json())
      .then(data => {
        if (data.length == 0) setPlayerList('')
        setPlayerList(data)
      })
  }, [])

  useEffect(() => {
    console.log(playerList)
  }, [playerList])


  const handleSubmit = (e: any) => {
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

      {playerList.length === 0 ? <></> : playerList.map((player: any) => {
        return <div key={player.id} className="py-8 px-8 max-w-sm mx-auto bg-midnight rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <div className='text-tahiti'>{player.player_name}</div>
          <div className='text-tahiti'>{player.job_id} </div>
          <div className='text-tahiti'>{player.lv} </div>
        </div>
      })}

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
