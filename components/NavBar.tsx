import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SignInGithub, SignInGoogle } from "./AuthButtons";
import Image from "next/image";
import Logo from "@/public/Caledy.png"

const NavBar = () => {
  return (
    <nav className=" flex justify-between bg-background  p-4">
      <div>
        <h1 className="text-2xl flex items-center gap-2 font-bold text-primary">
          <Image src={Logo} alt="logo" className="size-10 rounded-full "  />
          Ca<span className=" -ml-2 text-foreground">ledy</span>{" "}
        </h1>
      </div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button>Try Now</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]" >
            <DialogHeader>
              <DialogTitle>Make Account</DialogTitle>
              <DialogDescription>
                lets continue your journey with Caledy
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <SignInGithub />
              <SignInGoogle />
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </nav>
  );
};

export default NavBar;
