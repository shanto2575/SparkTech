
import { GetProduct } from '@/lib/api/data';
import Image from 'next/image';

const ProductsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id,'params')
    const product = await GetProduct()
    // console.log(product)
    const productID = product.find(p => p.id === id)
    if (!productID) {
        return <p>Product Is Not Found</p>
    }
    const { images, title, price,brand,category } = productID;
    const image = images?.[0]
    const secondImage = images?.[1] || images?.[0]
    return (
        <div className='flex gap-20 my-12'>
            <div className='relative h-[600px] w-1/2 overflow-hidden rounded-2xl group'
            >
                <Image
                    src={image}
                    fill
                    alt={title || 'ProductDetails'}
                    sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw,33vw'
                    className={`object-cover transition-all duration-500  p-6 group-hover:opacity-0 group-hover:scale-110 `}
                />
                <Image
                    src={secondImage}
                    fill
                    alt={title || 'ProductDetails'}
                    sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw,33vw'
                    className={`object-cover  p-6 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105`}
                />
            </div>
            <div className='py-6'>
                <h2 className='text-3xl font-bold'>Name: {title}</h2>
                <div className='flex gap-5 my-5 '>
                    <p className='border p-4 rounded bg-slate-200 text-black font-semibold'>Price : <span className='text-red-600'>${price}</span></p>
                    <p className='border p-4 rounded bg-slate-200 text-black font-semibold'>Brand : <span className='text-green-700'>{brand}</span></p>
                    <p className='border p-4 rounded bg-slate-200 text-black font-semibold'>Category : <span className='text-orange-600'>{category}</span></p>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetailsPage
