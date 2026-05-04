"use client"
import Link from "next/link"
import { useState } from "react"
import NavLink from "./NavLink"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="text-white shadow-2xl  w-full ">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="text-4xl font-bold bg-linear-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                    SparkTech
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8  font-medium text-white">
                    <li><NavLink href="/" >Home</NavLink></li>
                    <li><NavLink href="/product">Product</NavLink></li>
                    <li><NavLink href="/profile" >Profile</NavLink></li>
                </ul>

                {/* Login Button */}
                <div className="hidden md:block">
                    <Link href={'/login'}><button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                        Login
                    </button></Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-black text-white shadow-lg px-6 pb-4">
                    <ul className="flex flex-col gap-4 font-medium">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/product">Products</NavLink></li>
                        <li><NavLink href="/profile">Profile</NavLink></li>
                        <Link href={'/login'}><button className="bg-blue-600 text-white py-2 rounded-lg">
                            Login
                        </button></Link>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar