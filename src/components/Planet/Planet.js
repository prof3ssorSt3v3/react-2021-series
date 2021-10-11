import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Planet({ findPlanet }) {
  const [planet, setPlanet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setPlanet(findPlanet(id));
  }, [findPlanet, id]);

  let details = (
    <>
      <p>{planet && planet.name}</p>
      <p>{planet && planet.terrain}</p>
    </>
  );

  return (
    <>
      <h2>Planet Details</h2>
      {planet && planet.name === 'Alderaan' ? 'Too soon.' : details}
    </>
  );
}
