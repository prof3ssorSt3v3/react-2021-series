import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';
import Main from '../Main/Main';

export default function App(props) {
  const name = 'Company Name';
  const [terms, setTerms] = useState([]);

  function addTerm(term) {
    let newTerms = new Set([term, ...terms]);
    setTerms(Array.from(newTerms));
  }

  return (
    <div className="App">
      <Header company={name} />
      <SearchBar term={terms[0]} addTerm={addTerm} />

      <main className="content">
        <Main />
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
