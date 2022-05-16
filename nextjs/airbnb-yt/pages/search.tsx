import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function search({ searchResults }: any) {
  // console.log(searchResults)

  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query

  const formattedStartDate = format(new Date(startDate as string), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate as string), 'dd MMMM yy')
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>

          <div className="mb-5  space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Type of Place</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default search

// export async function getServerSideProps() {
//   const searchResults = await fetch(`https://links.papareact.com/is2`).then(
//     (res) => res.json()
//   )

//   return {
//     props: {
//       searchResults,
//     },
//   }
// }
