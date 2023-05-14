import { Route, Routes } from 'react-router-dom'
import IndexPage from './page/index.page'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<IndexPage/>} />
    </Routes>
  )
}

export default Router
