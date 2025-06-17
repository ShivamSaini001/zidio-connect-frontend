import React from 'react'
import Layout from './layout/Layout'
import { Outlet } from 'react-router'

const TeacherApp = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default TeacherApp
