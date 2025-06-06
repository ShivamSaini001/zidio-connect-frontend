import React from 'react'
import { Outlet } from 'react-router'
import Layout from './layout/Layout'

const TeacherDashboard = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default TeacherDashboard