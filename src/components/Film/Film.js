import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Film({ findFilm }) {
  const [film, setFilm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setFilm(findFilm(id));
  }, [findFilm, id]);

  let details = (
    <>
      <p>{film && film.title}</p>
      <p>{film && film.release_date}</p>
    </>
  );

  return (
    <>
      <h2>Film Details</h2>
      {film && details}
    </>
  );
}
