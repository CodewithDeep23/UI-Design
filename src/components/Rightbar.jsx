import Content from "./Content";
import Navbar from "./Navbar";

export default function Rightbar() {
    return (
        <div className="relative flex flex-col flex-1 h-auto items-start justify-center px-2 py-3 overflow-x-auto">
            <Navbar />
            <Content/>
        </div>
    )
}