"use client"
import Marquee from "react-fast-marquee"
import { topProducts } from "@/lib/api/data"

const TopProductMarquee = () => {
    return (
        <div className="bg-black text-white py-3">
            <Marquee pauseOnHover speed={60} gradient={true}>
                {topProducts.map(product => (
                    <span
                        key={product.id}
                        className="mx-8 text-lg font-semibold text-orange-400"
                    >
                        🔥 {product.title}
                    </span>
                ))}
            </Marquee>
        </div>
    )
}

export default TopProductMarquee