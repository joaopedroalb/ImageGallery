import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

export default function User() {
  return (
    <section className='content'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='post' element={<UserPhotoPost/>}/>
        <Route path='stats' element={<UserStats/>}/>
      </Routes>
    </section>
  )
}
