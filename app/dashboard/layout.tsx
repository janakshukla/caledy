import SideBar from "@/components/SideBar";

export default function DashBoardLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="w-screen flex  h-full ">
            <SideBar/>
            {children}
        </div>
    )

}