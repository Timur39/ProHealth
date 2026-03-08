import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ArticlesPage from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'
import './styles/globals.scss'
import AddArticlePage from '@/pages/AddArticlePage'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
      <Route path="/add-article" element={<AddArticlePage />} />
    </Routes>
  )
}

export default App
