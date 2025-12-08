import navBarItems from "@/data/navBarItems";
import Link from "next/link";


export default function SideBar() {
    return <div className="shadow-lg flex flex-col items-center justify-between py-4">
        <div className="flex flex-col items-center gap-10 w-full">
            <div className="w-[60%] aspect-square color bg-[#7B61FF] rounded-2xl flex justify-center items-center text-white font-bold text-2xl cursor-pointer">Q</div>
            <div className="w-full flex flex-col gap-8 items-center">
                {navBarItems.map((item, i) => (
                    <Link key={i} href={item.href} className="w-[30%] object-contain cursor-pointer" >
                        <img src={item.icon} alt={item.name} />
                    </Link>
                ))}
            </div>
        </div>
        
        <Link href="/settings" className="w-[30%] object-contain cursor-pointer hover:scale-110 hover:rotate-90 transition-transform">
            <img src="./navbar/settings.svg" alt="settings"  />
        </Link>
    </div>
}