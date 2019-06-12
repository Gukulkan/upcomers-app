import { combineReducers } from 'redux'
import order from './order.jsx'
import visit from './visit.jsx'
import { postsHasErrored, postsIsLoading, posts, postsCount,postsActivePage, currentPost } from './posts.jsx'

const reducersApp = combineReducers({
    order,
    visit,
    postsHasErrored, postsIsLoading, posts, postsCount, postsActivePage, currentPost
});

export default reducersApp