import BaseFetcher from './baseFetcher'

const NEWS_ENDPOINT = '/news'

class NewsClient extends BaseFetcher {
    constructor (config = {base : ''}) {
        super('NewsClient', config)
    }
    
    async getTopReleases () {
       return await this.execute(`${NEWS_ENDPOINT}/topreleases`, 'GET')
    }
}

export default NewsClient