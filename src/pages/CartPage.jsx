export default function CartPage({cart, removeFromCart})
{
    return(
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-5">Your Cart Items</h1>
            {cart.length === 0 ?(
            <p>Your cart is empty.</p>
            ):(
                <div className="max-w-[400px] space-y-4">
                    {cart.map((item)=>(
                        <div key={item.id} className="flex items-center justify-between bg-white shadow rounded-lg p-3">
                            <div >
                            <img src={item.image} alt={item.title} className="w-12 h-12 object-tontain"/>
                            <h2 className="text-md font-semibold">{item.title}</h2>
                            <p className="text-sm text-gray-700">${item.price}</p>
                        </div>
                        <div>
                        <button onClick={()=>removeFromCart(item.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg tansition">
                        X
                        </button>
                        </div>
                        </div>
                    ))}
                    </div>
            )}
        </div>
    );
}