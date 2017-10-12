import NewsClient from 'api/newsClient'
const newsClient = new NewsClient()

export const getTopReleases = () => {
    return {
        type: 'GET_TOP_RELEASES'
    }
}

export const fetchTopReleases = () => {
    return dispatch => {
        newsClient.getTopReleases()
    }
}