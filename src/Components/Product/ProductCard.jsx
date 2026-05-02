"use client"
import { Button } from '@heroui/react'
import Image from 'next/image'
import { useState } from 'react'

const ProductCard = ({ product }) => {
    const { title, price, images } = product
    const [hoverd, sethoverd] = useState(false)

    const firstimg=images?.[0]
    const secondimg=images?.[1]|| images?.[2]

    return (
        <div className='border rounded-2xl w-full  p-5'>
            <div className='relative h-96   w-full overflow-hidden shadow hover:shadow-2xl transition'
            onMouseEnter={()=>sethoverd(true)}
            onMouseLeave={()=>sethoverd(false)}
            >
                <Image
                src={firstimg}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={title}
                className={`object-cover transition duration-500 rounded-2xl ${hoverd ? 'opacity-0 scale-110' : 'opacity-100'}`}
                />
                <Image
                src={secondimg}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={title}
                className={`object-cover transition duration-500 rounded-2xl ${hoverd ? 'opacity-110  scale-110' : 'opacity-0'}`}
                />
            </div>
            <h2 className='text-xl font-bold '>{title}</h2>
            <p className='text-md font-semibold '>Price : <span className='text-red-500'>${price}</span></p>
            <div>
                <Button className={'rounded w-full my-3'}>View Details</Button>
            </div>
        </div>
    )
}

export default ProductCard