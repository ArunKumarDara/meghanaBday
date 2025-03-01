import FirstThings from "@/components/firstThings/FirstThings"
import { CarouselDemo } from "../carousel/Carousel"
import { Navbar } from "@/components/navbar/Navbar"
import Memories from "@/components/memories/Memories"
import Footer from "@/components/footer/Footer"

const Page = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Navbar />
            <CarouselDemo />
            <FirstThings />
            <Memories />
            <Footer />
        </div>
    )
}

export default Page