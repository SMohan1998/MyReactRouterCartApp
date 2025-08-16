export default function CartPage({cart, removeFromCart, increaseqty, decreaseqty})
{
    const subtotal = cart.reduce(
        (total,item) => total + item.price * item.quantity, 0
    );

    const discount = subtotal *0.1;
    const finalPrice = subtotal - discount;

    return(
        <div className="p-6 mt-20">
            <h1 className="text-3xl font-bold mt-4 mb-5">Your Cart Items</h1>
            {cart.length === 0 ?(
            <p>Your cart is empty.</p>
            ):(
                <div className="max-w-[700px] space-y-4 ">
                    {cart.map((item)=>(
                        <div key={item.id} className="flex items-center justify-between bg-white shadow rounded-lg p-3">
                            <div className="flex items-center space-x-4">
                            <img src={item.image} alt={item.title} className="w-12 h-12 object-tontain"/>
                            <h2 className="text-md font-semibold">{item.title}</h2>
                            <p className="text-sm text-gray-700">${item.price}</p>
                            <p className="text-sm text-gray-700"> Total: ${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                        <button onClick={()=> decreaseqty(item.id)} className="px-2 py-1 bg-gray-300 rounded"> - </button>
                        <span className="px-2">{item.quantity}</span>
                        <button onClick={()=> increaseqty(item.id)} className="px-2 py-1 bg-gray-300 rounded"> + </button>
                        <button onClick={()=>removeFromCart(item.id)} className="ml-4 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                        X
                        </button>
                        </div>
                        </div>
                    ))}

                    <div className="mt-6 border-t pt-4">
                        <p className="text-lg">Subtotal: ${subtotal.toFixed(2)}</p>
                        <p className="text-lg text-green-600">
                            Discount (10%): -${discount.toFixed(2)}
                        </p>
                        <h3 className="text-xl font-bold">
                            Final Price: ${finalPrice.toFixed(2)}
                        </h3>
                    </div>
                    </div>
            )}
        </div>
    );
}