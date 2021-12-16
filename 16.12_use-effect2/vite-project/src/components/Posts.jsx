import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPost = () => {
    setIsLoading(true);

    const URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setPosts(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(getPost, []);

  const postsTable = (
    <table>
      <thead>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, i) => (
          <tr key={i}>
            <td>{post.userId}</td>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  
  return (
    <div>
      <h1>use Effect</h1>
      {isLoading ? (
        <ClipLoader color="green" loading={true} size={300} />
      ) : (
        postsTable
      )}
    </div>
  );
}
