import { Outlet } from 'react-router'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { LoginPage } from './components/pages/LoginPage'
import Services from './components/pages/Services'
import FAQ from './components/pages/FAQ'
import ContactUs from './components/pages/ContactUs'

function App() {

  return (
    <>
      <main className='w-full h-full inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90'>
        <Header />
        <Outlet />
        <LoginPage />
        <Services />
        <FAQ />
        <ContactUs />
        <Footer />
      </main>
    </>
  )
}

export default App
