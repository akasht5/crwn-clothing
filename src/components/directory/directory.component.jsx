import React from 'react'

import MenuItem from '../menu-item/menu-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectSections } from '../../redux/directory/directory.selectors'

import { DirectoryContainer } from './directory.styles'

const Directory = ({ sections }) => {
    return (
        <DirectoryContainer>
            {sections.map(({ id, ...otherValues }) => (
                <MenuItem key={id} {...otherValues} />
            ))}
        </DirectoryContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    sections : selectSections
})

export default connect(mapStateToProps)(Directory)