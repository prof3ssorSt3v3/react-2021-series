import { createContext, useContext } from 'react';
//use the useLocalStorage hook instead of useState
import useLocalStorage from '../hooks/useLocalStorage';

const FavContext = createContext();
//now we have a context object

function FavProvider(props) {
  //create the provider and its functionality
  const shape = {
    type: '', //films, planets, people
    id: 0, //id of film, or planet, or person
    data: {}, //the actual data object
  };
  const [fav, setFav] = useLocalStorage('MyFav', shape);

  function updateFav(type, id, data) {
    setFav({
      type,
      id,
      data,
    });
  }
  return <FavContext.Provider value={[fav, updateFav]} {...props} />;
}

function useFav() {
  //for pages that want to access the context object's value
  //custom hook use...
  const context = useContext(FavContext);
  if (!context) throw new Error('Not inside the Provider');
  return context; // [fav, updateFav]
}
export { useFav, FavProvider };
