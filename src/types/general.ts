import { IUserPost } from './user'
import { IPostItem } from './post'
import { SORTING } from '../constants/general'
SORTING.ASC
export interface IAppState {
    page: number,
    selectedUser: string,
    loggedIn: boolean,
    users: Array<IUserPost>,
    posts: Array<IPostItem>,
    data: any,
    normalisedPost: INormalised,
    userSearchKeyword: string,
    postSearchKeyword: string,
    postSort: string,
    sl_token: string
}

export interface INormalised {
    [key: string]: Array<IPostItem>
}
