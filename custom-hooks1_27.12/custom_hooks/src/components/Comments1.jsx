import useFetchResources from "../hooks/useFetchResources";

const comments1 = () => {
  const albums = useFetchResources("comments");
  const albumsElement = albums.map((album) => (
    <tr key={album.id}>
      <td>{album.id}</td>
      <td>{album.name}</td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>{albumsElement}</tbody>
      </table>
    </div>
  );
};

export default comments1;
