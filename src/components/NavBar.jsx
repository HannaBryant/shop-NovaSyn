import React from 'react'

export const NavBar = () => {
    return (
        <>
            <nav className="w-full bg-indigo-950 p-4">
                <div className="flex justify-center gap-10">

                    <button className="text-white text-lg hover:text-green-300">
                        Home
                    </button>

                    <button className="text-white text-lg hover:text-green-300">
                        Products
                    </button>

                    <button className="text-white text-lg hover:text-green-300">
                        Checkout
                    </button>

                </div>
            </nav>
        </>
    )
}
