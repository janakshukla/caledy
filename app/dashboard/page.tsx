import requireUser from "@/lib/session";
import { redirect } from "next/navigation";

export default async function DashBoard() {
    const session = await requireUser();
    if (!session?.user) {
        return redirect("/");
    }
    return (
        <div className="max-w-7xl mx-auto ">
        DashBoard
        </div>
    )
}