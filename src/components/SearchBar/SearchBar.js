import './searchbar.css';
import { createRef, useEffect } from 'react';

export default function SearchBar(props) {
  const { keyword, saveSearch } = props;
  let inputRef = createRef(); //container for a DOM element

  function submitted(ev) {
    ev.preventDefault();
    console.log('submitted');
    saveSearch(inputRef.current.value);
  }

  useEffect(() => {
    //initial load plus if keyword in App changes
    inputRef.current.value = keyword;
  }, [keyword, inputRef]);

  return (
    <section className="searchBar">
      <form onSubmit={submitted}>
        <input
          type="text"
          ref={inputRef}
          name="keyword"
          className="searchText"
          placeholder="keyword"
        />
        <button type="submit" className="searchBtn" name="searchBtn">
          Search
        </button>
      </form>
      {props.term && <p>You searched for {props.term}</p>}
    </section>
  );
}

//{props.term ? <p>You searched for {props.term}</p> : ''}
