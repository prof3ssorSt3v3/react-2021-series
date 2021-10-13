import { useParams } from 'react-router-dom';

export default function Film({ list }) {
  const { id } = useParams();
  const film = list.find((item, index) => parseInt(id) === index + 1);

  let details = (
    <>
      <p>{film && film.title}</p>
      <p>{film && film.release_date}</p>
    </>
  );

  return (
    <div>
      <h2>Film Details</h2>
      {film && details}
    </div>
  );
}
