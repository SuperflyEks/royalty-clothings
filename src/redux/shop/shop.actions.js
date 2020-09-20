import ShopActionTypes from './shop.types';

export const collectionsUpdate = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
});