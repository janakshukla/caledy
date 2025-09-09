import requireUser from "@/lib/session";

export default async function DashBoard() {
    const session = await requireUser();
    return (
        <div className="max-w-7xl mx-auto ">
        DashBoard
        </div>
    )
}