import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Articles from './pages/Articles'
import ArticlePage from './pages/ArticlePage'
import './styles/globals.scss'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
    </Routes>
  )
}

export default App
