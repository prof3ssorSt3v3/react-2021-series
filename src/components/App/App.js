import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchHistory from '../SearchHistory/SearchHistory';
import { useState, useEffect } from 'react';
import SearchResults from '../SearchResults/SearchResults';

export default function App() {
  const name = 'Company Name';
  const [terms, setTerms] = useState(['new hope', 'empire']);
  const [films, setFilms] = useState([]);

  function addTerm(term) {
    setTerms([term, ...terms]);
  }

  useEffect(() => {
    console.log('initial render complete');
    fetchData('films');
  }, []);

  async function fetchData(type) {
    let url = `https://swapi.dev/api/${type}`;
    let resp = await fetch(url);
    if (!resp.ok) throw new Error(resp.statusText);
    let data = await resp.json();
    setFilms(data.results);
  }

  return (
    <div className="App">
      <Header company={name} />
      <SearchBar term={terms[0]} addTerm={addTerm} />
      <main className="content">
        <SearchHistory terms={terms} />
        <SearchResults films={films} />
      </main>
    </div>
  );
}

// import React from 'react';
// export default class App extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return <div className="App"> </div>;
//   }
// }
