import React from 'react'
import './RepositoriesCards.css'

const RepositoriesCards = ({cards}) => {
  return (
    <div className='cards-wrapper'>
      <div className='card-heading'>
        <span>{cards.name}</span>
        <span className="type">{cards.type}</span>
      </div>
      <div className="card-details">
        <div className="card-detail-language">
            <span>{cards.language}</span>
            <img src="/Ellipse-1.png" alt="" />
        </div>
        <div className="card-detail-language">
            <img src="/database.png" alt="" />
            <span>{cards.size} KB</span>
        </div>
        <div>
            <span>Updated {cards.day} day ago</span>
        </div>
      </div>
    </div>
  )
}

export default RepositoriesCards
