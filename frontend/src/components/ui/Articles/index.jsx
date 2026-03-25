import './Articles.scss'
import { useEffect, useState } from "react";
import ArticleCard from '@/components/ui/ArticleCard'
import { fetchArticles } from '@/api/articles'


const Articles = (props) => {
  const { className } = props

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <section className={`articles container ${className}`}>
      <h2 className="articles__title">Все статьи:</h2>
      <ul className="articles__list">
        {articles.map((article) => (
            <ArticleCard
              className="articles__item"
              key={article.id}
              {...article}
            />
        ))}
      </ul>
    </section>
  )
}

export default Articles