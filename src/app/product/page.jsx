import ProductCard from '@/Components/Product/ProductCard'
import { GetProduct } from '@/lib/api/data'
import React from 'react'

const ProductPage =async () => {
    const product=await GetProduct()
    // console.log(product)
    return (
        <div>
            <h2 className='text-center text-4xl font-bold text-orange-500 my-3 underline'>Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 container mx-auto'>
                {
                    product.map(p=><ProductCard key={p.id} product={p}/>)
                }
            </div>
        </div>
    )
}

export default ProductPage
