import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import Main from '../Main/Main';
import { useLocation } from 'react-router-dom';

export default function App(props) {
  const name = 'Company Name';
  const { pathname } = useLocation();
  const [page, setPage] = useState(pathname);
  const [keyword, setKeyword] = useState('');
  function saveSearch(term) {
    setKeyword(term);
  }
  useEffect(() => {
    //see if /planets => /films change keyword
    //if /planets => /planets/5 do NOT change keyword
    let newPath = pathname.split('/')[1];
    let oldPath = page.split('/')[1];
    if (newPath !== oldPath) {
      setPage(pathname);
      console.log('CHANGED the base path');
      setKeyword('');
    } else {
      console.log('SAME base path');
    }
  }, [pathname]);
  return (
    <div className="App">
      <Header company={name} />
      <SearchBar keyword={keyword} saveSearch={saveSearch} />

      <main className="content">
        <Main keyword={keyword} />
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
