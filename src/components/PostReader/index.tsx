import React from 'react'
import PostBox from '../PostBox'
import UserBox from '../UserBox'
import Header from '../Header'
import Typo from "../Typo"
import { TypoVariants } from "../Typo"
import { IPostItem, IPostReader } from '../../types/post'
import { IUserPost } from '../../types/user'

import './PostReader.css'

export default function PostReader({ posts, users, onChangeUser, onSearchUser, onSearchPost, onSort, postSortType }: IPostReader) {

  const renderPosts = ({ id, created_time, message }: IPostItem) => {
    return (
      <PostBox key={id} date={created_time}>
        <Typo variant={TypoVariants.body1}>
          {message}
        </Typo>
      </PostBox>
    )
  }

  const renderUserPost = ((item: IUserPost) => {
    const { from_id, from_name, count } = item
    return <UserBox key={from_id} userName={from_name} value={count} onClick={() => onChangeUser(from_id)}/>
  })

  return (
    <>
      <Header onSort={onSort} postSortType={postSortType} onSearchUser={onSearchUser} onSearchPost={onSearchPost}/>
      <div className='post-reader'>
        <div className='user-area'>
          {!!users && users.map(renderUserPost)}
        </div>
        <div className='post-area'>
          {!!posts?.length ? posts?.map(renderPosts) : <div>No Posts Found</div>}
        </div>
      </div>
    </>
  )
}