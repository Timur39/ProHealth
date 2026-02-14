import Article from '../ui/Article/Article'

const Main = () => {
  return (
    <main className="main">
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
