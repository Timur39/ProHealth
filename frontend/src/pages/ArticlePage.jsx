import {useParams} from 'react-router-dom'
import Header from '@/components/layouts/Header/Header'
import Footer from '@/components/layouts/Footer/Footer'
import Article from '@/components/ui/Article'

const ArticlePage = () => {
  const { slug, title, description, img, author } = useParams()

  return (
    <>
      <Header />
      <main>
        <Article />
      </main>
      <Footer />
    </>
  )
}

export default ArticlePage
