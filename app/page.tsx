import NavBar from "@/components/NavBar";
import requireUser from "@/lib/session";
import { redirect } from "next/navigation";




export default async function page() {
  const session = await requireUser();
  if(session.user){
    return redirect('/dashboard');
  }
  return (
    <div className="max-w-7xl mx-auto ">
      <NavBar/>
    </div>
  )
}
