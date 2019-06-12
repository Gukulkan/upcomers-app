export const addOrder = orderObject => {
    return {
        type: 'ADD_ORDER',
        orderObject
    }
};

export const changeLanguage = newLanguage => {
    return {
        type: 'CHANGE_LANGUAGE',
        newLanguage
    }
};

export const addVisit = visit => {
    return {
        type: 'ADD_VISIT',
        visit
    }
};

export const postsHasErrored = (bool) => {
    return {
        type: 'POSTS_HAS_ERRORED',
        hasErrored: bool
    }
};

export const postsIsLoading = (bool) => {
    return {
        type: 'POSTS_IS_LOADING',
        isLoading: bool
    };
};

export const postsFetchDataSuccess = (items) => {
    return {
        type: 'POSTS_FETCH_DATA_SUCCESS',
        items
    };
};

export const postsFetchData = (url) => {
    return (dispatch) => {
        dispatch(postsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(postsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(postsFetchDataSuccess(items)))
            .catch(() => dispatch(postsHasErrored(true)));
    };
};

export const postsCountFetchDataSuccess = (count) => {
    return {
        type: 'POSTS_COUNT_FETCH_DATA_SUCCESS',
        count
    };
};

export const postsActivePage = (page) => {
    return {
        type: 'POSTS_ACTIVE_PAGE',
        page
    };
};

export const postsCountFetchData = (url) => {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((count) => dispatch(postsCountFetchDataSuccess(count)));
    };
};

export const getCurrentPost = (url) => {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((order) => dispatch(setCurrentPost(order)));
    };
};

export const setCurrentPost = (post) => {
    return {
        type: 'SET_CURRENT_POST',
        post
    };
};