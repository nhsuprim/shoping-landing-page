import Navbar from "@/components/Navbar";
import NewProduct from "@/components/NewProduct";
import SliderBanner from "@/components/SliderBanner";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <div>
                <Navbar />
                <SliderBanner />
                <NewProduct />
            </div>
        </main>
    );
}
