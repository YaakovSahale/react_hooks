import { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => getComments(), []);

  const getComments = ()=>{
    const URL = `https://jsonplaceholder.typicode.com/comments`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((comment, i) => (
          <tr key={i}>
            <td>{comment.id}</td>
            <td>{comment.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Comments;
