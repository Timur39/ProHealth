import './Article.scss'

const Article = (props) => {
  const { src, title, description } = props

  return (
    <a href="#" className="article">
        <img className="article__image" src={src} alt='Изображение статьи' />
        <h3 className="article__title">{title}</h3>
        <p className="article__description">{description}</p>
    </a>
  )
}

export default Article
