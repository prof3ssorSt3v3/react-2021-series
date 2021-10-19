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
    axios
      .get(category, { params: { search: keyword }, timeout: 4000 })
      .then((response) => {
        setList(response.data.results);
      })
      .catch(console.error);
  }, [category, setList, keyword]);

  return [list, setKeyword];
}
