// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useStarWars(category) {
  //to replace the fetch/axios calls in Main.js
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState('');

  axios.defaults.baseURL = 'https://swapi.dev/api/';

  useEffect(() => {
    console.log('star wars axios', category, keyword);
    let cancel;
    axios
      .get(category, {
        params: { search: keyword },
        timeout: 4000,
        cancelToken: new axios.CancelToken((c) => {
          cancel = c;
        }),
      })
      .then((response) => {
        setList(response.data.results);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.warn('Cancelled API call');
        } else {
          console.error(err.message);
        }
      });

    return () => {
      //cancel if another fetch is about to be called.
      cancel();
    };
  }, [category, setList, keyword]);

  return [list, setKeyword];
}
