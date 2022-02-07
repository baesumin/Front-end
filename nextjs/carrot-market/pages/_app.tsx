import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto w-full max-w-xl">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
