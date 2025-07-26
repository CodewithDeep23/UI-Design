import Content from "./Content";
import Navbar from "./Navbar";

export default function Rightbar() {
    return (
        <div className="flex flex-col w-[1112.38px] h-auto items-start justify-center px-2 py-3 bg-red-400">
            <Navbar />
            <Content/>
        </div>
    )
}