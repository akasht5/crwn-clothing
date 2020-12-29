import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import CollectionsOverview from './collections-overview.component'
import WithSpinner from '../with-spinner/with-spinner.component'
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer

