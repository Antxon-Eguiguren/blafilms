import { useState } from 'react'

function Search({ onClickSearchTerm }) {
  const [searchTerm, setSearchTerm] = useState()

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        onChange={event => setSearchTerm(event.target.value)}
      />
      <button onClick={() => onClickSearchTerm(searchTerm)}>Search</button>
    </div>
  )
}

export default Search
