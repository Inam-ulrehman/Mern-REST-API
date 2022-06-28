import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  SharedLayout,
  LandingPage,
  ErrorPage,
  Home,
  About,
  Cart,
  Contact,
} from './pages'
import { taskGetThunk } from './features/task/taskSlice'

const App = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.task)

  useEffect(() => {
    dispatch(taskGetThunk())
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
