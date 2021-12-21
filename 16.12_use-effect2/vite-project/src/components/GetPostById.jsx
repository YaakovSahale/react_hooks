import { useEffect, useState } from "react";

export default function GetPostById({ id }) {
  const [post, setPost] = useState({});

  const getPost = () => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  };

  useEffect(getPost, [id]);

  return (
    <div>
      <h1>useEffect - Update</h1>
      <p>
        {post.id} {post.title}
      </p>
    </div>
  );
}
