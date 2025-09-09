
import { signIn } from "@/lib/auth"
import { Button } from "./ui/button"
 
export  function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button type="submit">Signin with Google</Button>
    </form>
  )
} 
export  function SignInGithub() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <Button  type="submit">Signin with Github</Button>
    </form>
  )
} 