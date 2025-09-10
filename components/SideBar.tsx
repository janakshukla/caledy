import Link from "next/link";
import { LayoutDashboard, Calendar, Settings2, Menu } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/Caledy.png";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const SideBar = () => {
  const Links = [
    {
      id: 1,
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      id: 2,
      name: "Calendar",
      href: "/dashboard/calendar",
      icon: Calendar,
    },
    {
      id: 3,
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings2,
    },
  ];

  return (

    <>
    <div className=" hidden w-1/5 h-screen md:flex flex-col  p-4 bg-sidebar ">
           <h1 className="text-xl lg:2xl h-fit flex  gap-2 font-bold text-primary">
        <Image src={Logo} alt="logo" className="size-8 rounded-full " />
        Ca<span className=" -ml-2 text-foreground">ledy</span>{" "}
      </h1>
      <nav className="flex flex-col gap-2 mt-12  ">
        {Links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-white  hover:bg-sidebar-primary flex items-center space-x-2 p-2 rounded"
          >
            <link.icon className="size-6" />
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
      
    </div>

    <Sheet >
        <SheetTrigger asChild>
          <Button className="md:hidden shrink-0"
                  size="icon"
                  variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col p-4 " >
        <SheetHeader>
          <SheetTitle className="text-2xl h-fit flex  gap-2 font-bold text-primary">
            <Image src={Logo} alt="logo" className="size-10 rounded-full " />
            Ca<span className=" -ml-2 text-foreground">ledy</span>{" "}
          </SheetTitle>
          <SheetDescription className="text-xs" >
            Navigate through the app
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-2 mt-12 ">
        {Links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-white hover:bg-sidebar-primary flex items-center space-x-2 p-2 rounded"
          >
            <link.icon className="size-6" />
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideBar;
