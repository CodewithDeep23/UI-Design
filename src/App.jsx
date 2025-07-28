import Sidebar from './components/Sidebar'
import { Rightbar } from './components'

function App() {

  return (
    <>
      <div className='flex flex-row items-start w-full h-full bg-gray-100'>
        < Sidebar/>
        <Rightbar/>
      </div>
    </>
  )
}

export default App
