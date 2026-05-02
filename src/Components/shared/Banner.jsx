'use client'
import { motion } from "framer-motion"
import { Button } from '@heroui/react'
import { LuShoppingBasket } from "react-icons/lu"
import Marquee from "./Marqee"
import Link from "next/link"
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
    }
}
const item = {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0 }
}
const Banner = () => {
    return (
        <div>
            <motion.div className='container mx-auto my-8 flex flex-col items-center justify-center h-[600px] space-y-6'
                variants={container}
                initial='hidden'
                animate='visible'
            >
                <motion.h2 className='text-6xl font-bold text-pink-500 '
                    variants={item}
                >Upgrade Your<motion.span className='text-orange-400 mx-4'>Tech Life</motion.span></motion.h2>
                <motion.p variants={item} className="text-xl font-semibold text-gray-300">
                    Discover the latest gadgets, smart devices, and accessories designed for the future.
                </motion.p>
                <Link href={'/product'}>
                    <motion.button
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-2xl font-bold bg-pink-500 rounded p-2 flex gap-4 cursor-pointer items-center justify-center"
                    >
                        Shop Now <LuShoppingBasket />
                    </motion.button>
                </Link>
                <div className="my-12">
                    <Marquee />
                </div>
            </motion.div>
        </div>
    )
}

export default Banner
