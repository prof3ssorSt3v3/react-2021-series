import { useParams } from 'react-router-dom';
// import { useParams, useLocation, useHistory } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { useFav } from '../../context/FavContext';
import { useEffect } from 'react';
export default function Person({ list }) {
  // let loc = useLocation();
  // let hist = useHistory();
  // const id = params.id;
  //synchronous search through the list array
  const { id } = useParams();
  let person = list.find((item, index) => parseInt(id) === index + 1);
  const [fav, updateFav] = useFav();

  function clicked(ev) {
    if (fav.id === parseInt(id) && fav.type === 'people') {
      //clear fav
      updateFav('', 0, {});
      return;
    }
    //change fav
    updateFav('people', parseInt(id), person);
  }
  useEffect(() => {
    console.log('initial film details or re-render');
  });
  return (
    <div className="details">
      <h2>Person Details {id}</h2>
      {person && <p>{person.name}</p>}
      {person && <p>{person.birth_year}</p>}
      <p>
        <button onClick={clicked}>
          {fav.id === parseInt(id) ? (
            <span>
              <i className="material-icons">favorite</i> Clear Fav
            </span>
          ) : (
            <span>
              <i className="material-icons">favorite_border</i> Set as Fav
            </span>
          )}
        </button>
      </p>
    </div>
  );
}
