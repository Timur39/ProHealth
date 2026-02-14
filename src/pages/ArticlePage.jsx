import {useParams} from 'react-router-dom'

const ArticlePage = () => {
  const { slug } = useParams()

  return (
    <>
      <h1>Статья: {slug}</h1>
    </>
  )
}

export default ArticlePage
