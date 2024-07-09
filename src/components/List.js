import Card from './Card'

function List({ items }) {
  return (
    <div className="search-results-list">
      {items.map(item => (
        <Card key={item.imdbID} item={item} />
      ))}
    </div>
  )
}

export default List
