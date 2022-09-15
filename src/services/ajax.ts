import axios from 'axios'

const client = axios.create({ baseURL: 'https://api.supermetrics.com/assignment' })
const RESPONSE_TYPE = 'json'

interface IRequest {
    method: string,
    url: string,
    params?: any
}

export const request = (req: IRequest) => {
    const { method, url, params } = req
    return client
        .request({ method, url, data: params, responseType: RESPONSE_TYPE })
        .then(res => (res))
        .catch(ex => (ex.response))
}

export const get = (url: string) => request({ method: 'get', url })
export const post = (url: string, params: any) => request({ method: 'post', url, params })
