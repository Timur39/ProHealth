import Article from '../components/Article'

const Main = () => {
  return (
    <main className="main">
      <div className="hero">
        <h1 className="hero__title"></h1>
        <p className="hero__description"></p>
      </div>
      <div className="articles">
        <ul className="articles__list">
          <li className="articles__item">
            <Article/>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Main