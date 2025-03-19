"use client";
import { useState } from "react";

import PostCard from "../PostCard";

export default function Page() {
  const [posts, setPosts] = useState([]);

  async function getPostsFromInternet() {
    const url = "https://jsonplaceholder.typicode.com/todos/${id}";
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();

      console.log(json)

      // setPosts(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <button onClick={getPostsFromInternet}>get posts</button>
      <div>
        {posts.map((post) => <PostCard title={post.title} />)}
      </div>
    </div>
  );
}
