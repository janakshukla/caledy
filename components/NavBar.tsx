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

const NavBar = () => {
  return (
    <nav className=" flex justify-between bg-background  p-4">
      <div>
        <h1 className="text-2xl font-bold text-primary">
          Ca<span className="text-foreground">ledy</span>{" "}
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
