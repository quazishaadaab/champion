import { signIn, signOut, useSession } from "next-auth/react"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
  <div>
     <a
    href={`/api/auth/signin`}
    onClick={(e) => {
      e.preventDefault()
      signIn()
    }}
  >
    Sign in
  </a>
  </div>
   
  )
}
