import { useParams } from 'react-router-dom';
// consume context object in this component by importing useFav()
// display if a film object matches the one in context
// provide button to set as new favourite
import { useFav } from '../../context/FavContext';

export default function Film({ list }) {
  const { id } = useParams();
  const film = list.find((item, index) => parseInt(id) === index + 1);
  const [fav, updateFav] = useFav();

  function clicked(ev) {
    updateFav('films', parseInt(id), film);
  }
  let details = (
    <>
      <p>{film && film.title}</p>
      <p>{film && film.release_date}</p>
    </>
  );

  return (
    <div>
      <h2>Film Details</h2>
      {details}
      <p>The current id of the favourite is {fav.id}</p>
      <p>{fav.data.title && <>Favourite film is {fav.data.title}</>}</p>
      <p>
        <button onClick={clicked}>
          <span className="material-icons">favorite</span> Set as Fav
        </button>
      </p>
    </div>
  );
}
