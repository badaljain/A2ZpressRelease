const NewsReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_TOP_RELEASES':
            return {
                ...state,
                topReleases: action.topReleases
            }

        default:
            return state
    }
}

export default NewsReducer