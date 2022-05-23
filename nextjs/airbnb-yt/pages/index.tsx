import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

const Home: NextPage = ({ exploreData, cardData }: any) => {
  return (
    <div className="">
      <Head>
        <title>SM Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          {/* API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }: any) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
          <div className="ml-3 flex space-x-3 overflow-scroll p-3 scrollbar-hide">
            {cardData?.map(({ img, title }: any) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  const cardData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )

  return {
    props: {
      exploreData,
      cardData,
    },
  }
}
