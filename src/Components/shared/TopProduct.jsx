import { GetProduct } from '@/lib/api/data'
import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'

const TopProduct = async () => {
    const products = await GetProduct()

    return (
        <section className="container mx-auto my-16 px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">
                🔥 Top Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.slice(0, 4).map(p => (
                    <div
                        key={p.id}
                        className="border rounded-2xl  p-4 shadow hover:shadow-xl transition"
                    >
                        <div className="relative h-64 w-full overflow-hidden rounded-xl">
                            <Image
                                src={p.images[0]}
                                fill
                                alt={p.title}
                                className="object-cover hover:scale-110 transition duration-500"
                            />
                        </div>
                        <h3 className="mt-4 font-semibold text-lg line-clamp-1">
                            {p.title}
                        </h3>
                        <Link href={`/products/${p.id}`} ><Button className='w-full m-4'>view</Button></Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopProduct