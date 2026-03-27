import './Article.scss'
import Button from '@/components/ui/Button'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "@/api/articles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Article = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticle(slug)
      .then((data) => setArticle(data))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p>Загрузка...</p>;
  if (!article) return <p>Статья не найдена</p>;

  const url = window.location.href

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    console.log('Ссылка скопирована в буфер обмена:', url);
    alert("Ссылка скопирована!");
  };

  return (
    <div className="article">
      <div className="article__body">
        <h1 className="h1 article__title">{article.title}</h1>
        <p className="article__description">{article.description}</p>
        <div className="article__meta">
          <p className="article__meta-date">Дата: {article.created_at.split('T')[0]}</p>
          <p className="article__meta-author">Автор: {article.author.name}</p>
        </div>
        <div className="article__buttons">
          <Button className="article__button button--transparent button--link" type="button">
            <a
              href={`https://t.me/share/url?url=${url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </Button>
          <Button className="article__button button--transparent button--link" type="button">
            <a
              href={`https://vk.com/share.php?url=${url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              ВКонтакте
            </a>
          </Button>
          <Button className="article__button button--transparent" onClick={copyLink}>
            Скопировать ссылку
          </Button>
        </div>
      </div>
      <div className="article__content markdown container">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Article
