import useFetchResources from "../hooks/useFetchResources";

const Albums1 = () => {

  const albums = useFetchResources("albums")

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
            <tr key={i}>
              <td>{album.id}</td>
              <td>{album.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Albums1;
