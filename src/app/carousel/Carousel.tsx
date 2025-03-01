import { Card, CardContent } from "@/components/ui/card";
import Confetti from "react-confetti";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";

const images = [
    "/images/wc1.png",
    "/images/wc2.png",
    "/images/wc3.png",
    "/images/wc4.png",
];

export function CarouselDemo() {

    return (
        <div className="w-screen max-w-4xl flex justify-center items-center relative mt-18" id="crsl">
            <Confetti numberOfPieces={100} gravity={0.2} className="w-screen max-w-4xl" />
            <Carousel className="w-screen max-w-4xl relative">
                <CarouselContent>
                    {images.map((src, index) => (
                        <CarouselItem key={index} className="w-screen">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="shadow-lg rounded-xl">
                                    <CardContent className="flex h-[80vh] object-cover items-center justify-center">
                                        <img src={src} alt={`Memory ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
            </Carousel>
        </div>
    );
}
