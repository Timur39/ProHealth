import Header from '@/components/layouts/Header/Header'
import Footer from '@/components/layouts/Footer/Footer'
import Hero from '@/components/ui/Hero/Hero'
import Articles from '@/components/ui/Articles/Articles'
import articlesAPI from '../services/api'

const Home = () => {

  const articles = [
    {
      slug: 'kak-uluchshit-kachestvo-sna',
      title: 'Как улучшить качество сна',
      description: 'Узнайте эффективные способы улучшить качество сна и просыпаться отдохнувшим.',
      src: 'https://yandex-images.clstorage.net/10r0ie364/f1467bsoCMNa/nenhUIEMKhh2YciWTS_i3mWtwrPKsiqJTTn_GXu07VV7h08nwDD3NK-Jitd989ykTMmsG_f2CCsvwpO_iej3OqnNJTTgme9sV_SIFn1_wwuxnNN2avf7LWj5G2yLEX3V3UStIMczVaIde90F3AaJMXzdLZ-TwJuaP_Y2XQ26EbmMmUDSlV7J2bESyMbOHQIqdm-AZGj3iAhbuvqLeJb4oo-EbJCUsvXSLTjvBpwUSOG-H-p-0bGY3yzUdvx8SUG73cuTcdePyHngMijmX4_waLXN0QVaVPjYa7t6WehV6bI8Zb_jxpBGwJ7LDURtJGrD_yxrDPAxCU8sh0RtromDaj6IY1E1btiq4bN4Rpwdg2hVrOFFeBbIa5hrO_p6lwpyPFUPc5cx1nPO2v-mXVQb8g5uyx_icGs-jcSVjMyYYJkcmcFz5nwJ2FDjGbYP_rBIp36jZSiFa7ka-ZtJy3TZoBw2DFNVk4URb8mMx10muQMNnnuNsFP6Lu8mNv58S4AKbAkgk3c-2ogT8Bm2Pb0BeSYt84dY1orJSjsKGGp2mJH-lR5ypSD3A2x4rxUftIlCHt6bHeGxuy59djZdXpuS-awbUIHGrNjJshIY1a8eIQo3zJF3eTT7OAp6SFt6VooS_5dvU1Rw5nFtSf_nTWYLgq4-i4_AwFj9XuVWv6-qQJguaePhZ6zYa1EA2rUtD1M71n6ipYrWWtio-PsbWPeIMJzl7HPVgmXzTojPF6_UyPMOHrnsEnOI_K1UhF2NqYJorJlQMuR861lQcqjUDT7TmSRssUVbVbkr6espawrES9G-hx0DpcIXg4zY3wXPNlqwT6wLrsAj6f9vdIW_XmnAav6ZIgF3rkq4c8CIJkx8w3oUP8MWSWdIucvpGHu5hMix7Tf_Y3cC5GMPCd6lvRW60e-cuy7xoQo8_vVkbO_KUvu8GmJAhMxoCTLiSSftnSDZtb_jhAlXm0nZ6YoJk',
      text: "Качественный сон — одна из самых важных составляющих здоровья человека. Он влияет на настроение, продуктивность, память и общее самочувствие. Однако многие люди сталкиваются с проблемами сна: долго засыпают, часто просыпаются или чувствуют усталость даже после ночи отдыха.\n" +
        "\n" +
        "Одним из ключевых факторов хорошего сна является режим. Старайтесь ложиться и вставать в одно и то же время, даже в выходные. Это помогает организму настроить внутренние биологические часы и быстрее засыпать.\n" +
        "\n" +
        "Также важно создать комфортную обстановку в спальне. Комната должна быть тёмной, тихой и прохладной. Удобный матрас и подушка играют не менее важную роль. Перед сном лучше избегать яркого света, особенно от телефонов и компьютеров, так как он мешает выработке мелатонина — гормона сна.\n" +
        "\n" +
        "Не менее значимы привычки перед сном. Постарайтесь не есть тяжёлую пищу за 2–3 часа до сна и ограничить употребление кофеина во второй половине дня. Вместо этого можно выбрать расслабляющие занятия: чтение, лёгкую растяжку или тёплый душ.\n" +
        "\n" +
        "Физическая активность в течение дня также улучшает сон, но интенсивные тренировки лучше завершать за несколько часов до отдыха. Кроме того, важно уметь справляться со стрессом, так как тревожные мысли часто мешают заснуть.\n" +
        "\n" +
        "Таким образом, улучшение качества сна — это результат правильных привычек и внимательного отношения к своему организму. Даже небольшие изменения в распорядке дня могут значительно повысить уровень энергии и качество жизни."
    },
    {
      slug: 'pitanie-dlya-zdorovya-serdca',
      title: 'Питание для здоровья сердца',
      description: 'Рекомендации по питанию, которые помогут поддерживать здоровье вашего сердца.',
      src: 'https://avatars.mds.yandex.net/i?id=3ec0ad3c91b244926b9de3744721329a26ab5959-12752873-images-thumbs&n=13',
    },
    {
      slug: 'uprazhneniya-dlya-pohudeniya',
      title: 'Упражнения для похудения',
      description: 'Эффективные упражнения, которые помогут вам сбросить лишний вес и улучшить физическую форму.',
      src: 'https://yandex-images.clstorage.net/10r0ie364/f1467bsoCMNa/nenhUIEMKhh2YciWTS_i3mWtwrPKsiqJTTz6DF5xjaV71x8nwCCyNErsP6dd1vyEGbm8C9cTCFtK90aqzKjiX_mNJSTwea_MJ7SIFn1_wwuxnNN2avf7LWj5G2yLEX3V3UStIMczVaIde90F3AaJMXzdLZ-TwJuaP_Y2XQ26EbmMmUDSlV7J2bESyMbOHQIqdm-AZGj3iAhbuvqLeJb4oo-EbJCUsvXSLTjvBpwUSOG-H-p-0bGY3yzUdvx8SUG73cuTcdePyHngMijmX4_waLXN0QVaVPjYa7t6WehV6bI8Zb_jxpBGwJ7LDURtJGrD_yxrDPAxCU8sh0RtromDaj6IY1E1btiq4bN4Rpwdg2hVrOFFeBbIa5hrO_p6lwpyPFUPc5cx1nPO2v-mXVQb8g5uyx_icGs-jcSVjMyYYJkcmcFz5nwJ2FDjGbYP_rBIp36jZSiFa7ka-ZtJy3TZoBw2DFNVk4URb8mMx10muQMNnnuNsFP6Lu8mNv58S4AKbAkgk3c-2ogT8Bm2Pb0BeSYt84dY1orJSjsKGGp2mJH-lR5ypSD3A2x4rxUftIlCHt6bHeGxuy59djZdXpuS-awbUIHGrNjJshIY1a8eIQo3zJF3eTT7OAp6SFt6VooS_5dvU1Rw5nFtSf_nTWYLgq4-i4_AwFj9XuVWv6-qQJguaePhZ6zYa1EA2rUtD1M71n6ipYrWWtio-PsbWPeIMJzl7HPVgmXzTojPF6_UyPMOHrnsEnOI_K1UhF2NqYJorJlQMuR861lQcqjUDT7TmSRssUVbVbkr6espawrES9G-hx0DpcIXg4zY3wXPNlqwT6wLrsAj6f9vdIW_XmnAav6ZIgF3rkq4c8CIJkx8w3oUP8MWSWdIucvpGHu5hMix7Tf_Y3cC5GMPCd6lvRW60e-cuy7xoQo8_vVkbO_KUvu8GmJAhMxoCTLiSSftnSDZtb_jhAlXm0nZ6YoJk',
    },
  ]

  // console.log(articlesAPI.test().then(res => console.log(res)))

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
