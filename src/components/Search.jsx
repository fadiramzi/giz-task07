const Search = ({ handleSearch, searchValue }) => {
  return (
    <input
      className="input"
      type="text"
      placeholder="Search Products"
      value={searchValue}
      onChange={handleSearch}
    />
  );
};

export default Search;
