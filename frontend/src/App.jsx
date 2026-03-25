import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ArticlesPage from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'
import './styles/globals.scss'
import AddArticlePage from '@/pages/AddArticlePage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import PrivateRoute from '@/utils/PrivateRoute'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
      <Route path="/add-article" element={
        <PrivateRoute>
          <AddArticlePage />
        </PrivateRoute>
      }  />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
