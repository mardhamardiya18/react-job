import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import Homepage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'
import JobPage from './pages/JobPage'
import NotFound from './pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path='/jobs' element={<JobPage />} />
      <Route path='*' element={<NotFound />} />
    </Route>


  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App