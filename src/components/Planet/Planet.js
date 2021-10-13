import { useParams } from 'react-router-dom';

export default function Planet({ list }) {
  const { id } = useParams();
  const planet = list.find((item, index) => parseInt(id) === index + 1);

  let details = (
    <>
      <p>{planet && planet.name}</p>
      <p>{planet && planet.terrain}</p>
    </>
  );

  return (
    <div>
      <h2>Planet Details</h2>
      {planet && planet.name === 'Alderaan' ? 'Too soon.' : details}
    </div>
  );
}
