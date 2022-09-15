export interface IPostItem {
    id: string,
    from_name: string,
    from_id: string,
    message: string,
    type: string,
    created_time: string
}

export interface IPostReader {
    posts: Array<IPostItem>,
    users: Array<any>,
    postSortType: string,
    onChangeUser: (a: string) => void,
    onSearchUser: (a: string) => void,
    onSearchPost: (a: string) => void,
    onSort: (a: string) => void
}

export interface IGetPostsRequest {
    sl_token: string,
    page: number
}