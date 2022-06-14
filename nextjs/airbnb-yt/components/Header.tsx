import Image from 'next/image'
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker, Range } from 'react-date-range'
import { useRouter } from 'next/router'

function Header({ placeholder }: any) {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)
  const router = useRouter()

  const selectionRange: Range = {
    startDate,
    endDate,
    key: 'selection',
  }

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput('')
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    })
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      <div
        onClick={() => router.push('/')}
        className="relative my-auto flex h-10 cursor-pointer items-center"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e: any) => setSearchInput(e.target.value)}
          className="flex-grow bg-transparent pl-5 text-sm text-gray-600 outline-none"
          type="text"
          placeholder={placeholder || `Start your search`}
        />
        <SearchIcon className="mx-auto hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      <div className="flex items-center justify-end space-x-4">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="-2 flex space-x-2 rounded-full p-2 ">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="col-span-3 mx-auto flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="mb-4 flex items-center border-b">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              onChange={(e: any) => setNoOfGuests(e.target.value)}
              value={noOfGuests}
              type={'number'}
              min={1}
              className="w-12 pl-2 text-lg text-red-400 outline-none"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-1 text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
