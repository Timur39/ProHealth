import './Article.scss'
import Button from '@/components/ui/Button/Button'

const Article = (props) => {
  const {
    src = 'https://via.placeholder.com/600x400',
    title = 'Как улучшить качество сна',
    description = 'Советы по созданию идеальной спальни и режима для здорового сна',
    slug = 'article-title',
    author = 'Тимур Щипливцев',
    date = '2026-01-01',
    text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  } = props

  const url = window.location.href

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    console.log('Ссылка скопирована в буфер обмена:', url);
    alert("Ссылка скопирована!");
  };

  return (
    <div className="article">
      <div className="article__body">
        <h1 className="h1 article__title">{title}</h1>
        <p className="article__description">{description}</p>
        <div className="article__meta">
          <p className="article__meta-date">Дата: {date}</p>
          <p className="article__meta-author">Автор: {author}</p>
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
      <div className="article__content container">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Article
