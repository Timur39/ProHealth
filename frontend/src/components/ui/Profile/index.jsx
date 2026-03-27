import { useEffect, useState } from "react";
import { fetchMyArticles, deleteArticle } from "@/api/articles";
import './Profile.scss'
import Button from '../../ui/Button'
import {Link} from 'react-router-dom'

function Profile() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function setData() {
        const articles = await fetchMyArticles()
        setArticles(articles)
    }
    setData()
  }, []);

  async function handleDelete(id) {
    await deleteArticle(id)
    setArticles((prev) => prev.filter((a) => a.id !== id));
    alert('Статья удалена!')
  }

  return (
    <div className="profile container">
      <h1 className="profile__title">Мои статьи</h1>
      <ul className="profile__articles-list">
        {articles.map((a) => (
          <li key={a.id} className="profile__card">
            <h2 className="profile__card-title h3">
              <Link to={`/articles/${a.slug}`}>{a.title}</Link>
            </h2>
            <Button className="button--transparent" onClick={() => handleDelete(a.id)}>
              Удалить
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
