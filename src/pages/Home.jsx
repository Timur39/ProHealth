import Header from '@/components/layouts/Header/Header'
import Footer from '@/components/layouts/Footer/Footer'
import Hero from '@/components/ui/Hero/Hero'
import Articles from '@/components/ui/Articles/Articles'

const Home = () => {

  const articles = [
    {
      slug: 'kak-uluchshit-kachestvo-sna',
      title: 'Как улучшить качество сна',
      description: 'Узнайте эффективные способы улучшить качество сна и просыпаться отдохнувшим.',
      src: 'https://img.freepik.com/premium-photo/remote-mountain-view-with-lake_958297-1114.jpg?semt=ais_hybrid',
    },
    {
      slug: 'pitanie-dlya-zdorovya-serdca',
      title: 'Питание для здоровья сердца',
      description: 'Рекомендации по питанию, которые помогут поддерживать здоровье вашего сердца.',
      src: 'https://img.freepik.com/premium-photo/remote-mountain-view-with-lake_958297-1114.jpg?semt=ais_hybrid',
    },
    {
      slug: 'uprazhneniya-dlya-pohudeniya',
      title: 'Упражнения для похудения',
      description: 'Эффективные упражнения, которые помогут вам сбросить лишний вес и улучшить физическую форму.',
      src: 'https://img.freepik.com/premium-photo/remote-mountain-view-with-lake_958297-1114.jpg?semt=ais_hybrid',
    },
  ]

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Articles articles={articles}/>
      </main>
      <Footer />
    </>
  )
}

export default Home
