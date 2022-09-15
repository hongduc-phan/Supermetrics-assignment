import React, { useState, useEffect, useMemo } from 'react'
import dayjs from 'dayjs'
import Login from '../../components/LogIn'
import PostReader from "../../components/PostReader"
import { Routes, Route, useNavigate } from "react-router-dom"
import { IPostItem } from '../../types/post'
import { IUserPost } from '../../types/user'
import { IAppState, INormalised } from '../../types/general'
import { SORTING } from '../../constants/general'
import { debounce } from '../../utils/general'
import './Posts.css'
import {authenUser, getPosts} from '../../services'

const INIT_STATE = {
  page: 1,
  selectedUser: '',
  loggedIn: false,
  users: [],
  posts: [],
  normalisedPost: {},
  userSearchKeyword: '',
  postSearchKeyword: '',
  postSort: SORTING.ASC,
  data: null,
  sl_token: ''
}

function Posts() {
  const [state, setState] = useState<IAppState>(INIT_STATE)
  const { loggedIn, sl_token, users, posts, selectedUser, normalisedPost, data, postSort, userSearchKeyword, postSearchKeyword } = state
  let navigate = useNavigate()

  useEffect(() => {
    console.log('22222', sl_token,state.sl_token)

    const getPostsData = async () => {

      const postsRes = await getPosts({page: 1, sl_token: sl_token})
      console.log('1111', postsRes)
      setState(prevState => {
        return {
          ...prevState,
          data: postsRes?.data?.data?.posts,
        }
      })
    }
    getPostsData()
  }, [state?.loggedIn, state?.sl_token])

  useEffect(() => {
    let hashPost: INormalised = {}
    let hashUser: any = {}
    let parsedUser: any = []
    let sortedPosts: any = []
    let fromUserId: string = ''

    if (!!data) {
      !!data?.length && data.forEach((item: IPostItem) => {

        const { from_id, from_name } = item
        if (!hashUser[from_id]) {
          hashUser[from_id] = { count: 1, from_name, from_id }
        } else {
          hashUser[from_id] = { ...hashUser[from_id], count: hashUser[from_id].count + 1 }
        }
        if (!hashPost[from_id]) {
          hashPost[from_id] = [item]
        } else {
          hashPost[from_id].push(item)
        }
      })
    }
    
    parsedUser = Object.values(hashUser)?.sort(sortUsers)
    fromUserId = parsedUser[0]?.from_id
    sortedPosts = hashPost[fromUserId as keyof INormalised]?.sort(sortPosts(postSort))
    setState(prevState => {
      return {
        ...prevState,
        users: parsedUser,
        posts: sortedPosts,
        selectedUser: fromUserId,
        normalisedPost: hashPost
      }
    })
  }, [state?.data])

  useEffect(() => {
    if (!!loggedIn) {
      navigate('/posts')
    } else {
      navigate('/login')
    }
  }, [loggedIn])

  const sortUsers = (a: any, b: any) => {
    return a.from_name.localeCompare(b.from_name)
  }

  const sortPosts = (sort: string) => (a: any, b: any) => {
    if (sort === SORTING.ASC) {
      return dayjs(a.created_time).valueOf() - dayjs(b.created_time).valueOf()
    }
    return dayjs(b.created_time).valueOf() - dayjs(a.created_time).valueOf()
  }

  const handleChangeUser = (id: string) => {
    const sortedPosts = normalisedPost[id as keyof INormalised]?.sort(sortPosts(postSort))
    setState(prevState => {
      return {
        ...prevState,
        selectedUser: id,
        posts: sortedPosts
      }
    })
  }

  const handleLogin = async (u: string, e: string) => {
    const authRes = await authenUser(u, e)
    console.log('122223333', authRes)
    if (!!authRes) {
      setState(prevState => ({ ...prevState, sl_token: authRes?.data?.data?.sl_token, loggedIn: true }))
    }
  }

  const handleSearchUser = (k: string) => {
    setState(prevState => ({ ...prevState, userSearchKeyword: k }))
  }

  const handleSearchPost = (k: string) => {
    setState(prevState => ({ ...prevState, postSearchKeyword: k }))
  }

  const handleSortPost = (sort: string) => {
    const sortedPosts = normalisedPost[selectedUser as keyof INormalised]?.sort(sortPosts(postSort))
    setState(prevState => ({ ...prevState, postSort: sort, posts: sortedPosts }))
  }

  const filteredUsers = useMemo(() => {
    if (!userSearchKeyword) return users
    return users.filter((item: IUserPost) => {
      return item.from_name?.toLowerCase().includes(userSearchKeyword)
    })
  }, [users, userSearchKeyword])

  const filteredPosts = useMemo(() => {
    if (!postSearchKeyword) return posts
    return posts.filter((item: IPostItem) => {
      return item.message?.toLowerCase().includes(postSearchKeyword)
    })
  }, [posts, postSearchKeyword])

  return (
    <>
      <Routes>
        <Route 
          path='login' 
          element={<Login onLogin={handleLogin} />} 
        />
        <Route 
          path='posts' 
          element={
            <PostReader 
              posts={filteredPosts} 
              users={filteredUsers} 
              onSearchUser={debounce(handleSearchUser)}
              onSearchPost={debounce(handleSearchPost)}
              onChangeUser={handleChangeUser}
              onSort={handleSortPost}
              postSortType={postSort}
            />
          } 
        />
      </Routes>
    </>
  )
}

export default Posts
