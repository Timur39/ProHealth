import './ArticleCard.scss'
import {Link} from 'react-router-dom'

const ArticleCard = (props) => {
  const { src, title, description, slug } = props

  return (
    <Link to={`/articles/${slug}`} className="article-card">
        <img className="article-card__image" src={src} alt='Изображение статьи' />
        <h3 className="article-card__title">{title}</h3>
        <p className="article-card__description">{description}</p>
    </Link>
  )
}

export default ArticleCard
