import './App.css'
import Navbar from './components/home/Navbar'
import Home from './components/pages/Home'
import RegistrationForm from './components/pages/RegistrationForm'
import Services from './components/pages/Services'

function App() {

  return (
    <>
      <main className='w-full h-full inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90'>
        <Navbar />
        <Home />
        <Services />
        <RegistrationForm />
      </main>
    </>
  )
}

export default App
