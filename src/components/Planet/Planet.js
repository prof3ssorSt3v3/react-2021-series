import { useParams } from 'react-router-dom';
import { useFav } from '../../context/FavContext';

export default function Planet({ list }) {
  const { id } = useParams();
  const planet = list.find((item, index) => parseInt(id) === index + 1);
  const [fav, updateFav] = useFav();

  function clicked(ev) {
    if (fav.id === parseInt(id) && fav.type === 'films') {
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

  return (
    <div>
      <h2>Planet Details</h2>
      {planet && planet.name === 'Alderaan' ? 'Too soon.' : details}
    </div>
  );
}
