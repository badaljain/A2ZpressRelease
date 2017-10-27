const NewsReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_TOP_RELEASES':
            return {
                ...state,
                showLoader: true
            }
        case 'RECEIVE_TOP_RELEASES':
            return {
                ...state,
                topReleases: action.topReleases,
                showLoader: false
            }   

        default:
            return state
    }
}

export default NewsReducer