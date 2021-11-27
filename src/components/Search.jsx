import React from 'react'

function Search(props) {
    return (
    <form>
        <input onChange={this.onSearchChange} value={this.state.searchVal} type="text" id="search"/>
    </form>
    )
}

export default Search;
