import React from 'react'
import TextInput from "../TextInput"
import { SORTING } from '../../constants/general'

import "./Header.css"

interface IHeaderProps {
  postSortType: string,
  onSort: (a: string) => void,
  onSearchUser: (a: string) => void
  onSearchPost: (a: string) => void
}

export default function Header({ onSort, postSortType, onSearchUser, onSearchPost }: IHeaderProps) {

  const handleChangeUserSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    onSearchUser(value)
  }

  const handleChangePostSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    onSearchPost(value)
  }

  return (
    <div className='nav'>
      <div className='userSearch-area'>
        <div className='userSearch-wrapper'>
          <TextInput
            label="userSearch"
            name="userSearch"
            placeholder="search"
            hideLabel={true}
            onChange={handleChangeUserSearch}
          />
        </div>
      </div>
      <div className='icons-group'>
        <button className='icon-btn' disabled={postSortType === SORTING.ASC} onClick={() => onSort(SORTING.ASC)}>
          <span className='icon-up'></span>
        </button>
        <button className='icon-btn' disabled={postSortType === SORTING.DESC} onClick={() => onSort(SORTING.DESC)}>
          <span className='icon-down'></span>
        </button>
      </div>
      <div className='postSearch-area'>
        <div className='postSearch-wrapper'>
          <TextInput
            label="postSearch"
            name="postSearch"
            placeholder="search"
            hideLabel={true}
            onChange={handleChangePostSearch}
          />
        </div>
      </div>
    </div>
  )
}