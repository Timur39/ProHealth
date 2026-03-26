import Button from '@/components/ui/Button'
import Field from '@/components/ui/Field'
import createArticle from '@/api/articles'
import './AddArticle.scss'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const AddArticle = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await createArticle(title, content, description, image)

      alert("Статья отправлена на модерацию")
      navigate("/articles")
    } catch {
      alert("Ошибка создания статьи")
    }
  }
  
  const cancelHandler = (e) => {
    e.preventDefault()

    window.location.href = '/'
  }

  return (
    <div className="add-article container">
      <div className="add-article__header">
        <h1 className="add-article__header-title">Добавить новую статью</h1>
        <p className="add-article__header-description">Заполните форму ниже, чтобы опубликовать свою статью на ProHealth</p>
      </div>
      <form className="add-article__form form" onSubmit={handleSubmit}>
        <Field
          className="add-article__title form__title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Заголовок статьи *"
          type="text"
          placeholder="Например: Как улучшить качество сна"
          required
        />
        <Field
          className="add-article__description form__description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Описание статьи"
          type="text"
          placeholder="Краткое описание статьи 1-2 предложения"
        />
        <Field
          className="add-article__content form__content"
          isTextArea={true}
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          label="Содержание статьи *"
          type="textarea"
          placeholder="Напишите полный текст статьи здесь..."
          required
        />
        {/* <ReactMarkdown>{content}</ReactMarkdown> */}
        <Field
          className="add-article__image form__image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          label="Превью для статьи (URL) *"
          type="text"
          placeholder="https://example.com/image.jpg"
          required
        />
        <div className="add-article__form-buttons form__buttons">
          <Button className="form__submit-button" type="submit">Опубликовать статью</Button>
          <Button className="form__cancel-button button--transparent" onClick={cancelHandler}>Отмена</Button>
        </div>
      </form>
    </div>
  )
}

export default AddArticle
