import NewsClient from 'api/newsClient'
const newsClient = new NewsClient()

export const getTopReleases = () => {
    return {
        type: 'GET_TOP_RELEASES'
    }
}

export const receivedTopReleases = (topReleases) => {
    return {
        type: 'RECEIVE_TOP_RELEASES',
        topReleases
    }
}

export const fetchTopReleases = () => {
    return dispatch => {
        dispatch(getTopReleases())
        return newsClient.getTopReleases().then(
            response => dispatch(receivedTopReleases(response.json))
        )
    }
}