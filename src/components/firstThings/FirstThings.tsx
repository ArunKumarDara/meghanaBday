import { motion } from "motion/react";

const firstThings = [
    { title: "First Date", image: "/images/date.jpg", description: "The day we first chat, the start of our beautiful journey." },
    { title: "First Meeting Place", image: "/images/place2.jpg", description: "The place where our journey began." },
    { title: "First Gift", image: "/images/gift.jpg", description: "The first gift I ever gave you, straight from the heart." },
    { title: "First Cinema", image: "/images/movie.jpg", description: "Our first movie date, laughing and enjoying every moment." },
    { title: "First Birthday Celebration", image: "/images/bday.jpg", description: "Celebrating our first birthday together, filled with love and laughter." },
    { title: "First Trip", image: "/images/trip2.jpg", description: "The first adventure we took together, creating endless memories." },
];

const FirstThings = () => {
    return (
        <div className="min-h-screen md:min-w-4xl max-w-4xl bg-gray-100 mt-5 border border-rounded-lg p-4" id="firstThings">
            <div className="max-w-4xl px-6">
                <h1 className="text-4xl font-bold text-center mb-12 text-black">Our Firsts Together</h1>
                <div>
                    {firstThings.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <section className="relative flex items-center justify-center h-60vh mb-5">
                                <div className="flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
                                    <motion.img
                                        src={item.image}
                                        alt={item.title}
                                        className={`w-full md:w-1/2 h-64 object-cover rounded-lg ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                    />
                                    <motion.div
                                        className="w-full md:w-1/2 p-6 flex flex-col justify-center text-center md:text-left"
                                    >
                                        <h2 className="text-3xl font-bold text-black">{item.title}</h2>
                                        <p className="text-lg text-black mt-3">{item.description}</p>
                                    </motion.div>
                                </div>
                            </section>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FirstThings;
