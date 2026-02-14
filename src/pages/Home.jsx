import Header from '../components/layouts/Header/Header'
import Footer from '@/components/layouts/Footer/Footer'
import Hero from '@/components/ui/Hero/Hero'
import Articles from '@/components/ui/Articles/Articles'

const Home = () => {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Articles />
      </main>
      <Footer />
    </>
  )
}

export default Home
