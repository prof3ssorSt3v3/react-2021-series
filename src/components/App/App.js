import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import Main from '../Main/Main';
import { useLocation } from 'react-router-dom';
//create context object in App so it can be shared
//add the Provider to the component tree to give access to children
import { FavProvider } from '../../context/FavContext';

export default function App(props) {
  const name = 'Company Name';
  const { pathname, search } = useLocation();
  const [nada, category, id] = pathname.split('/');
  const [oldPage, setOldPage] = useState(category);
  const [keyword, setKeyword] = useState('');

  // /   /planets   /planets/45

  useEffect(() => {
    //see if /planets => /films change keyword
    //if /planets => /planets/5 do NOT change keyword
    console.log(`going from ${oldPage} to ${category}`);
    if (oldPage === category) {
      if (search) {
        const term = search.replace('?search=', '');
        console.log(`running a search for ${term}`);
        setKeyword(term);
      } else {
        if (!id) {
          setKeyword('');
        }
      }
    } else {
      //changed category
      setKeyword('');
      setOldPage(category);
    }
  }, [category, search, id, oldPage]);

  return (
    <FavProvider>
      <div className="App">
        <Header company={name} />
        {category && <SearchBar keyword={keyword} category={category} />}

        <main className="content">
          <Main keyword={keyword} category={category} />
        </main>
      </div>
    </FavProvider>
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
