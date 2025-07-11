import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router'
import { myrouter } from './routes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={myrouter}></RouterProvider>
    </>
  )
}

export default App
