import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <nav className="w-full bg-indigo-950 p-4">
                <div className="flex justify-center gap-10">

                    <Link to="/" className="text-white text-lg hover:text-green-300">
                        Home
                    </Link>

                    <Link to="/products" className="text-white text-lg hover:text-green-300">
                        Products
                    </Link>

                    <Link to="/checkout" className="text-white text-lg hover:text-green-300">
                        Checkout
                    </Link>

                </div>
            </nav>
        </>
    )
}
