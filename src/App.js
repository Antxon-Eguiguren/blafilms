import React, { useState } from 'react'
import { ReactComponent as ChevronLeft } from './chevron-left.svg'
import { ReactComponent as ChevronRight } from './chevron-right.svg'
import useFetch from './hooks/useFetch'
import List from './components/List'
import Search from './components/Search'
import { url } from './constants'
import './App.css'

function isLastPage(page, totalResults) {
  return page <= totalResults / 10 ? true : false
}

function isFirstPage(page) {
  return page > 1 ? true : false
}

function App() {
  const [searchResult, setSearchResult] = useState('king')
  const [page, setPage] = useState(1)
  const {
    data: movies,
    error,
    loading,
    totalResults,
  } = useFetch({ url, searchTerm: searchResult, page })

  function handleClickSearchTerm(term) {
    setPage(1)
    setSearchResult(term)
  }

  function handlePreviousClick() {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  function handleNextPage() {
    if (isLastPage(page, totalResults)) {
      setPage(page + 1)
    }
  }

  return (
    <div className="App">
      <Search onClickSearchTerm={handleClickSearchTerm} />

      {error && <p>Error!</p>}
      {loading && <p>Loading...</p>}
      {!error && !loading && (
        <div className="search-results">
          <div className="chevron">
            {isFirstPage(page) && <ChevronLeft onClick={handlePreviousClick} />}
          </div>
          <List items={movies} />
          <div className="chevron">
            {isLastPage(page, totalResults) && (
              <ChevronRight onClick={handleNextPage} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
