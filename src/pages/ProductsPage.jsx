import React, {useState, useEffect} from "react";
export default function ProductsPage({addToCart}){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
            .then((res)=>res.json())
            .then((data)=>setProducts(data))
            .catch((err)=>console.error("Error fetching products:", err));

    }, []);

    return(
        <div className="p-6 mt-20">
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-6">
                {products.map((product)=>(
                    <div
                    key={product.id}
                    className="border rounded-lg shadow p-4 flex flex-col items-center">
                        <img
                        src={product.image}
                        alt={product.title}
                        className="h-40 object-contain mb-4"
                        />
                        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                        <p className="text-green-600 font-bold mb-4">${product.price}</p>
                        <button
                        onClick={()=> addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
            </div>
                ))}
            </div>
        </div>
    );
}
