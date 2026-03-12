import React from 'react'

export const Checkout = () => {
  return (

    <>
     <div className="min-h-screen flex items-center justify-center bg-slate-600">
<form className="bg-gray-300 p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">
          Payment Details
        </h2>

        
        <div className="mb-4">
          <label className="block text-gray-800 mb-2">
            Cardholder Name
          </label>
          <input
            type="text"
            placeholder="John Smith"
            className="w-full border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-800 mb-2">
            Card Number
          </label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        
        <div className="flex gap-4 mb-6">

          <div className="w-1/2">
            <label className="block text-gray-800 mb-2">
              Expiration Date
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-gray-800 mb-2">
              CVV
            </label>
            <input
              type="text"
              placeholder="123"
              className="w-full border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

        </div>

       
        <button
          type="submit"
          className="w-full bg-slate-700 text-white font-semibold p-3 rounded-lg hover:bg-blue-800"
        >
          Pay Now
        </button>

      </form>

     </div>
    </>
    
  )
}
