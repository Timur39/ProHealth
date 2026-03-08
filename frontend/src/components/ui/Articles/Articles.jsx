import './Articles.scss'
import ArticleCard from '@/components/ui/ArticleCard/ArticleCard'

const Articles = (props) => {
  const {
    className,
    articles = [],
  } = props

  return (
    <section className={`articles container ${className}`}>
      <h2 className="articles__title">Все статьи:</h2>
      <ul className="articles__list">
        {articles.map((article) => (
            <ArticleCard
              className="articles__item"
              key={article.slug}
              {...article}
            />
        ))}
      </ul>
    </section>
  )
}

export default Articles