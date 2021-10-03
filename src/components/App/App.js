import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchHistory from '../SearchHistory/SearchHistory';
import { useState, useEffect } from 'react';
import SearchResults from '../SearchResults/SearchResults';

export default function App() {
  const name = 'Company Name';
  const [terms, setTerms] = useState([]);
  const [results, setResults] = useState([]);
  const [dataType, setDataType] = useState('films');

  function addTerm(term) {
    let newTerms = new Set([term, ...terms]);
    setTerms(Array.from(newTerms));
    // fetchData(term);
  }

  useEffect(() => {
    fetchData(terms[0]);
    return () => {
      //clean up function
    };
  }, [terms]);

  useEffect(() => {
    console.log('initial render complete');
    fetchData();
  }, []);

  async function fetchData(keyword) {
    let url = `https://swapi.dev/api/${dataType}`;
    if (keyword) {
      url += `/?search=${keyword}`;
    }
    let resp = await fetch(url);
    if (!resp.ok) throw new Error(resp.statusText);
    let data = await resp.json();
    setResults(data.results);
  }

  return (
    <div className="App">
      <Header company={name} />
      <SearchBar term={terms[0]} addTerm={addTerm} />
      <main className="content">
        <SearchHistory terms={terms} />
        <SearchResults results={results} type={dataType} />
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
