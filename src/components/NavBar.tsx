import  { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "./ui/button"
import logo from "../../logo.png"
import { Menu, X } from 'lucide-react'

const routes = [
    "For Schools",
    "Performance", 
    "About Us",
    "Contact Us"
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuVariants = {
        hidden: { 
            opacity: 0, 
            x: "100%",
            transition: { duration: 0.3 }
        },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.3 }
        }
    }

    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3 }
        }
    }

    return (
        <nav className="w-full z-50 fixed top-0 left-0 px-4 md:px-8 flex py-4 justify-between items-center bg-white  shadow-sm">
            <a href="/" className="z-50">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className=" w-20  lg:w-40 h-auto"
                />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-5 text-xl font-semibold items-center">
                {routes.map((route) => (
                    <a 
                        href="/" 
                        key={route} 
                        className=" font-main lg:text-lg md:text-sm hover:text-blue-600 transition-colors"
                    >
                        {route}
                    </a>
                ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-2">
                <Button 
                    size="lg" 
                    className="bg-[#0B57FF] hover:bg-blue-700 transition-colors"
                >
                    Login
                </Button>
                <Button 
                    size="lg" 
                    variant="ghost" 
                    className="hover:bg-[#DFF7E5]"
                >
                    Register
                </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden z-50">
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </Button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6"
                    >
                        {routes.map((route, index) => (
                            <motion.a 
                                key={route}
                                href="/"
                                variants={linkVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{ delay: index * 0.1 }}
                                className="text-2xl font-bold"
                            >
                                {route}
                            </motion.a>
                        ))}
                        
                        <div className="flex flex-col gap-4 mt-8">
                            <Button 
                                size="lg" 
                                className="bg-[#0B57FF] hover:bg-blue-700"
                            >
                                Login
                            </Button>
                            <Button 
                                size="lg" 
                                variant="ghost"
                            >
                                Register
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar