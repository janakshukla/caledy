import requireUser from "@/lib/session"
import { Button } from "./ui/button"


const NavBar = () => {

  return (
    <nav className=" flex justify-between bg-background  p-4">
     <div>
        <h1 className="text-2xl font-bold text-primary">Ca<span className="text-foreground" >ledy</span> </h1>
     </div>
     <Button>Try now </Button>
     {/* <ModeToggle/>
     <SignInGithub/>
     <SignInGoogle/> */}
    </nav>
  )
}

export default NavBar