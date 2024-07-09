import placeholderImg from '../placeholder.png'

function Card({ item }) {
  return (
    <div key={item.imdbID} className="search-item">
      <img
        src={item.Poster === 'N/A' ? placeholderImg : item.Poster}
        alt="poster"
      />
      <div className="search-item-data">
        <div className="title">{item.Title}</div>
        <div className="meta">{`${item.Type} | ${item.Year}`}</div>
      </div>
    </div>
  )
}

export default Card
