import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({href,children}) => {
    const pathname=usePathname()
    const isActive=href===pathname
    return <Link href={href} className={`font-bold text-xl ${isActive && 'text-orange-500  border-b-2 border-purple-500'}`}>{children}</Link>
}

export default NavLink
