import { GoogleLogin } from '@react-oauth/google'
export default function Google() {
  return (
    <div className="flex">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          fetch(`/api/auth/sign-in?credential=${credentialResponse.credential}`)
            .then((res) => res.json())
            .then((data) => console.log(data))
        }}
        onError={() => {
          console.log('Login Failed')
        }}
        useOneTap
      />
    </div>
  )
}
