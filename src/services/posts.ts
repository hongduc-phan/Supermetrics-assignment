import { get, post } from './ajax'
import { IGetPostsRequest } from '../types/post'
import { CLIENT_ID } from '../constants/user'

export const authenUser = (name: string, email: string) => {
    return post('/register', { name, email, client_id: CLIENT_ID })
}

export const getPosts = ({ page, sl_token }: IGetPostsRequest) => {
    return get(`/posts?page=${page}&sl_token=${sl_token}`)
}