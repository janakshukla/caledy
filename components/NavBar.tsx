import { SignInGithub, SignInGoogle } from "./AuthButtons"
import { ModeToggle } from "./Toggle-theme"


const NavBar = () => {
  return (
    <nav className=" flex justify-between bg-background  p-4">
     <div>
        <h1 className="text-2xl font-bold text-primary">Ca<span className="text-foreground" >ledy</span> </h1>
     </div>
     <ModeToggle/>
     <SignInGithub/>
     <SignInGoogle/>
    </nav>
  )
}

export default NavBar