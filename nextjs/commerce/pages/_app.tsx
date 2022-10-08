import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// import { GoogleOAuthProvider } from '@react-oauth/google'
// import { CLIENT_ID } from 'constants/googleAuth'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session
}>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: Infinity },
    },
  })
  return (
    // <GoogleOAuthProvider clientId={CLIENT_ID!!}>
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>

    // </GoogleOAuthProvider>
  )
}

export default MyApp
