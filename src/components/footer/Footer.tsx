import { Cake } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="text-center text-gray-400 max-w-full mt-8 py-4 border-t border-gray-700">
            <div className="flex justify-center items-center gap-2 text-lg">
                <Cake size={24} className="text-black" />
                <span className='text-black'>Meghana Jugunta</span>
            </div>
            <p className="text-sm mt-2">Happy Birthday!</p>
            <p className="text-xs mt-1">All Rights Reserved © Arun Kumar</p>
        </footer>
    )
}

export default Footer