import { useParams } from 'react-router-dom';
// import { useParams, useLocation, useHistory } from 'react-router-dom';
// import { useEffect, useState } from 'react';

export default function Person({ list }) {
  // let loc = useLocation();
  // let hist = useHistory();
  // const id = params.id;
  //synchronous search through the list array
  const { id } = useParams();
  let person = list.find((item, index) => parseInt(id) === index + 1);

  return (
    <div>
      <h2>Person Details {id}</h2>
      {person && <p>{person.name}</p>}
      {person && <p>{person.birth_year}</p>}
    </div>
  );
}
