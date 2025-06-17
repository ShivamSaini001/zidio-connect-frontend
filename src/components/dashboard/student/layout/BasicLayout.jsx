import React from 'react'
import StudentNavbar from '../custom-components/navbar/StudentNavbar'
import { Outlet } from 'react-router'
import FooterSection from '../pages/home/FooterSection'

const BasicLayout = () => {
  return (
    <section className='flex flex-col min-h-screen'>
      <StudentNavbar />
      <Outlet />
      <FooterSection/>
    </section>
  )
}

export default BasicLayout
