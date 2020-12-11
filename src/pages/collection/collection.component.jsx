import React from 'react'
import './collection.styles.scss'

const CollectionPage = ({ match }) => {
    console.log(match.params);
    return (
        <div className="collection">
            <h2>CollectionPage</h2>

        </div>
    )
}

export default CollectionPage
