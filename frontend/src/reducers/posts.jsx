export function postsHasErrored(state = false, action) {
    switch (action.type) {
        case 'POSTS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function postsIsLoading(state = false, action) {
    switch (action.type) {
        case 'POSTS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function posts(state = [], action) {
    switch (action.type) {
        case 'POSTS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}

export function postsCount(state = 0, action) {
    switch (action.type) {
        case 'POSTS_COUNT_FETCH_DATA_SUCCESS':
            return action.count;

        default:
            return state;
    }
}

export function postsActivePage(state = 1, action) {
    switch (action.type) {
        case 'POSTS_ACTIVE_PAGE':
            return action.page;

        default:
            return state;
    }
}

export function currentPost(state = {}, action) {
    switch (action.type) {
        case 'SET_CURRENT_POST':
            state = action.post;
            return state;
        default:
            return state;
    }
}