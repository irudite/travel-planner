import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import CreateItenary from './create-itenary/index.jsx'
import Header from './components/custom/Header'

const router = createBrowserRouter([ 
  {
    path:'/',
    element:<App/>
  },
  { 
    path:'/create-itenary', 
    element: <CreateItenary/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
