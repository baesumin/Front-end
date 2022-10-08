import { useSession, signIn, signOut } from 'next-auth/react'

export default function GoogleLogin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        Signed in as {session.user?.email}
        <br />
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div>
      Not signed in <br />
      <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
