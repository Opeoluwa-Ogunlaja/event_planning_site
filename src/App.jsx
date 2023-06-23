import './App.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes'

function App() {
  return (
    <>
      <main className='w-full'>
        <RouterProvider router={Router}/>
      </main>
    </>
  )
}

export default App
