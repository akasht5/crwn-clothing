import React from 'react'
import './collection.styles.scss'

const CollectionPage = ({ match }) => {
    console.log('This is collection component ')
    console.log(match);

    return (
        <div className="collection">
            <h2>CollectionPage</h2>
        </div>
    )
}

export default CollectionPage
