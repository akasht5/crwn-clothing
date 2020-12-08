import React from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectSections } from '../../redux/directory/directory.selectors'

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherValues }) => (
                <MenuItem key={id} {...otherValues} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections : selectSections
})

export default connect(mapStateToProps)(Directory)