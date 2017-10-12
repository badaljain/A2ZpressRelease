const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' }
const postOptions = { method: 'POST', headers }
const getOptions = { method: 'GET', headers }
const maybeJSON = (x) => x.json().catch(e => Promise.resolve(JSON.stringify({})))
const parseResponse = (response) => maybeJSON(response).then(json => ({ rawResponse: response, json }))
const identity = (x) => x

const BASE_ENDPOINT = '/api'

class BaseFetcher {

    constructor (client, config) {
    }

    execute = (resourceEndpoint, method = 'GET', body = {}) => {
        const fetchUrl = `${BASE_ENDPOINT}${resourceEndpoint}`
        let requestParams = { ...getOptions }

        if (method !== 'GET') {
            requestParams = { ...postOptions, body: JSON.stringify(body) }
        }

        return fetch(fetchUrl, requestParams).then(parseResponse).then(identity)
    }
}

export default BaseFetcher