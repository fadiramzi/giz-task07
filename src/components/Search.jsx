const Search = ({ handleSearch, searchProducts }) => {
    return (
      <input
        className="box"
        type="text"
        placeholder="Search"
        value={searchProducts}
        onChange={handleSearch}
      />
    );
  };
  
  export default Search;
