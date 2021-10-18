import { useParams } from 'react-router-dom';
// consume context object in this component by importing useFav()
// display if a film object matches the one in context
// provide button to set as new favourite
import { useFav } from '../../context/FavContext';
import { useEffect } from 'react'; //added for episode-19 demo

export default function Film({ list }) {
  const { id } = useParams();
  const film = list.find((item, index) => parseInt(id) === index + 1);
  const [fav, updateFav] = useFav();

  function clicked(ev) {
    if (fav.id === parseInt(id) && fav.type === 'films') {
      //clear fav
      updateFav('', 0, {});
      return;
    }
    //change fav
    updateFav('films', parseInt(id), film);
  }
  let details = (
    <>
      <p>{film && film.title}</p>
      <p>{film && film.release_date}</p>
    </>
  );
  useEffect(() => {
    //added for episode-19 demo
    console.log('initial film details or re-render');
  });

  return (
    <div className="details">
      <h2>Film Details</h2>
      {details}
      {fav.id !== 0 && <p>The current id of the favourite is {fav.id}</p>}
      {fav.data.title && <p>Favourite film is {fav.data.title}</p>}
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
