import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Rightbar } from './components'

function App() {

  return (
    <>
      <div className='flex items-start w-full min-h-screen bg-gray-100'>
        < Sidebar/>
        <Rightbar/>
      </div>
    </>
  )
}

export default App
