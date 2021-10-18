import { useParams } from 'react-router-dom';
import { useFav } from '../../context/FavContext';
import { useEffect } from 'react';

export default function Planet({ list }) {
  const { id } = useParams();
  const planet = list.find((item, index) => parseInt(id) === index + 1);
  const [fav, updateFav] = useFav();

  function clicked(ev) {
    if (fav.id === parseInt(id) && fav.type === 'planets') {
      //clear fav
      updateFav('', 0, {});
      return;
    }
    //change fav
    updateFav('planets', parseInt(id), planet);
  }

  let details = (
    <>
      <p>{planet && planet.name}</p>
      <p>{planet && planet.terrain}</p>
    </>
  );
  let button = (
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
  );
  useEffect(() => {
    console.log('initial film details or re-render');
  });
  return (
    <div className="details">
      <h2>Planet Details</h2>
      {planet && planet.name === 'Alderaan' ? 'Too soon.' : details}
      {button}
    </div>
  );
}
