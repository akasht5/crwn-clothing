import React from 'react'
import './collection.styles.scss'

const CollectionPage = ({ match }) => {
    console.log(match);
    return (
        <div className="collection">
            <h2>CollectionPage</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id quam facilis debitis laboriosam, consequuntur magnam consectetur sunt corporis quia quas doloremque maxime a aliquid ea rem quos, itaque eveniet!</p>
        </div>
    )
}

export default CollectionPage
