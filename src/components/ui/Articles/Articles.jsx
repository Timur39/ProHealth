import './Articles.scss'
import Article from '@/components/ui/Article/Article'

const Articles = (props) => {
  const { className } = props

  return (
    <section className={`articles container ${className}`}>
      <h2 className="articles__title">Все статьи:</h2>
      <ul className="articles__list">
          <Article
            className="articles__item"
            src="https://img.freepik.com/premium-photo/remote-mountain-view-with-lake_958297-1114.jpg?semt=ais_hybrid"
            title="Название статьи"
            description="Описание"
          />
          <Article
            className="articles__item"
            src="https://img.freepik.com/premium-photo/remote-mountain-view-with-lake_958297-1114.jpg?semt=ais_hybrid"
            title="Название статьи"
            description="Описание"
          />
          <Article
            className="articles__item"
            src="https://img.freepik.com/premium-photo/remote-mountain-view-with-lake_958297-1114.jpg?semt=ais_hybrid"
            title="Название статьи"
            description="Описание"
          />
      </ul>

    </section>
  )
}

export default Articles