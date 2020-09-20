import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { collectionsUpdate } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component{
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { collectionsUpdate } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then( snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            collectionsUpdate(collectionsMap); 
            this.setState({loading: false});
        });
    }

    render(){
        const {match} = this.props;
        const {loading} = this.state;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={props => (<CollectionOverviewWithSpinner isLoading={loading} {...props}/>)} />
                <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={loading} {...props}/>)} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    collectionsUpdate: collectionsMap => dispatch(collectionsUpdate(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
