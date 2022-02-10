import type { NextPage } from 'next';
import Layout from '@components/layout';
import Message from '@components/message';

const Stream: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-4 py-10  px-4">
        <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
          <span className="mt-3 block text-2xl text-gray-900">$140</span>
          <p className=" my-6 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some bullshit
            about it ain&apos;t there, and we got to go someplace else and get it,
            I&apos;m gonna shoot you in the head then and there. Then I&apos;m gonna shoot
            that bitch in the kneecaps, find out where my goddamn money is. She gonna tell
            me too. Hey, look at me when I&apos;m talking to you, motherfucker. You
            listen: we go in there, and that ni**a Winston or anybody else is in there,
            you the first motherfucker to get shot. You understand?
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Live Chat</h2>
          <div className="h-[50vh] space-y-4 overflow-y-scroll py-10  px-4 pb-16">
            <Message message="Hi how much are you selling them for?" />
            <Message message="I want ￦20,000" reversed />
            <Message message="미쳤어" />
          </div>
          <div className="fixed inset-x-0 bottom-0  bg-white py-2">
            <div className="relative mx-auto flex w-full  max-w-md items-center">
              <input
                type="text"
                className="w-full rounded-full border-gray-300 pr-12 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <button className="flex items-center rounded-full bg-orange-500 px-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stream;
