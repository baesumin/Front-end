import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="grid gap-10 bg-slate-400 px-20 py-20">
      <div className="rounded-3xl bg-white p-6 shadow-xl">
        <span className="text-3xl font-semibold">Select Item</span>
        <div className="my-2 flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="mt-2 flex justify-between border-t-2 border-dashed ">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="mx-auto mt-5 w-2/4 rounded-xl bg-blue-500 p-2 text-center text-white">
          Checkout
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="bg-blue-500  p-6 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>

        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-red-400"></div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative -mb-5 -mt-10 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-xl"></div>

      <div className="rounded-2xl bg-white p-6 shadow-xl"></div>
    </div>
  );
};

export default Home;
