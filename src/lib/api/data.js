export const GetProduct = async () => {
    const res = await fetch('https://product-api-cdr3.onrender.com/products')
    return res.json()
}
export const topProducts = [
    { id: 1, title: "iPhone 15 Pro Max" },
    { id: 2, title: "Samsung Galaxy S24 Ultra" },
    { id: 3, title: "MacBook Air M3" },
    { id: 4, title: "Dell XPS 13 Laptop" },
    { id: 5, title: "Sony WH-1000XM5 Headphones" },
    { id: 6, title: "Apple Watch Series 9" },
    { id: 7, title: "iPad Pro M2" },
    { id: 8, title: "Logitech MX Master 3S Mouse" },
    { id: 9, title: "Asus ROG Gaming Laptop" },
    { id: 10, title: "GoPro Hero 12 Camera" }
]