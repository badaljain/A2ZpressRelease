import BaseFetcher from './baseFetcher'

const NEWS_ENDPOINT = '/news'

class NewsClient extends BaseFetcher {
    constructor (config = {base : ''}) {
        super('NewsClient', config)
    }
    
    async getTopReleases () {
        const url = `${NEWS_ENDPOINT}/topreleases`
        return await this.execute(`${url}`, 'GET')
    }
}

export default NewsClient