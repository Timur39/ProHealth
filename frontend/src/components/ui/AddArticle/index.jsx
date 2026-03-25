import Button from '@/components/ui/Button'
import Field from '@/components/ui/Field'
import './AddArticle.scss'

const AddArticle = () => {

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
      <form className="add-article__form form">
        <Field
          className="add-article__title form__title"
          name="title"
          label="Заголовок статьи *"
          type="text"
          placeholder="Например: Как улучшить качество сна"
          required
        />
        <Field
          className="add-article__description form__description"
          name="description"
          label="Описание статьи *"
          type="text"
          placeholder="Краткое описание статьи 1-2 предложения"
          required
        />
        <Field
          className="add-article__content form__content"
          isTextArea={true}
          name="content"
          label="Содержание статьи *"
          type="textarea"
          placeholder="Напишите полный текст статьи здесь..."
          required
        />
        {/*<Field*/}
        {/*  className="form__author"*/}
        {/*  name="author"*/}
        {/*  label="Автор? *"*/}
        {/*  type="text"*/}
        {/*  placeholder="Ваше имя"*/}
        {/*  required*/}
        {/*/>*/}
        <Field
          className="add-article__image form__image"
          name="image"
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
