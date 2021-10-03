import './searchbar.css';

export default function SearchBar(props) {
  function submitted(ev) {
    ev.preventDefault();
    console.log('submitted');
    props.addTerm(ev.target['keyword'].value);
  }

  return (
    <section className="searchBar">
      <form onSubmit={submitted}>
        <input
          type="text"
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
