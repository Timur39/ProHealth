import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import Hero from '@/components/ui/Hero'
import Articles from '@/components/ui/Articles'

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
