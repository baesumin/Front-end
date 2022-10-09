import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { CLIENT_ID } from 'constants/googleAuth'
export default function Google() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID!!}>
      <div className="flex">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            fetch(
              `/api/auth/sign-in?credential=${credentialResponse.credential}`
            )
              .then((res) => res.json())
              .then((data) => console.log(data))
          }}
          onError={() => {
            console.log('Login Failed')
          }}
          useOneTap
        />
      </div>
    </GoogleOAuthProvider>
  )
}
