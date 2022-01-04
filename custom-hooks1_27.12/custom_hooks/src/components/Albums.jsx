import { useEffect, useState } from "react";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/albums`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <table >
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album, i) => (
            <tr>
              <td>{album.id}</td>
              <td>{album.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Albums;
