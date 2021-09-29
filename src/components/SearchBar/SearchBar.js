import './searchbar.css';

export default function SearchBar(props) {
  function submitted(ev) {
    ev.preventDefault();
    console.log('submitted');
  }
  function focused(ev) {
    console.log('onFocus');
  }
  function changed(ev) {
    console.log('onInput', ev.target.value);
  }
  function clicked(ev) {
    // ev.preventDefault();
    console.log('clicked');
  }

  return (
    <section className="searchBar">
      <form onSubmit={submitted}>
        <input
          type="text"
          name="keyword"
          className="searchText"
          placeholder="keyword"
          onFocus={focused}
          onInput={(ev) => changed(ev)}
        />
        <button
          type="submit"
          className="searchBtn"
          name="searchBtn"
          onClick={clicked}
        >
          Search
        </button>
      </form>
    </section>
  );
}
