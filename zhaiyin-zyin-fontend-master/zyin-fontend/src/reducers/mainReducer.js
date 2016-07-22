import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//引入各个板块的 reducer
import template from './_templateReducer';
import dev from './devReducer';
import index from './indexReducer';
import appleBasket from './appleBasketReducer';


import libraryIndex from './library/index';
import libraryMyCollection from './library/myCollection';
import libraryCollectionView from './library/collectionView';
import libraryFileView from './library/fileView';


const Reducers = combineReducers({
	index: index,
	print: template,
	library: combineReducers({
		index: libraryIndex,
		myCollection: libraryMyCollection,
		collectionView: libraryCollectionView,
		fileView: libraryFileView
	}),
	test: template,
	dev: dev,
	appleBasket: appleBasket,
	user: template,
	routing: routerReducer
})


export default Reducers;