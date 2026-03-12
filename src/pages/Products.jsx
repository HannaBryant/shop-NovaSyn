import React from 'react'

export const Products = () => {
  return (
    <>
    <div className='mx-auto bg-slate-600 flex items-center justify-center p-6'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

           <div className='bg-white rounded-lg shadow p-4 text-center'>

            <img className='rounded-lg mb-4' src="/Nuerasphere.png" alt="Product1" />

            <h1 className='text-xl font-bold mb-2'>NueraSphere</h1>

            <p>An AI Neural assistant that connects to your brainwaves to improve focus, productivity and boost.</p>

            <p className='text-blue-500 mb-4'>$899.99</p>

            <button className='bg-blue-700 text-white shadow px-4 py-2 rounded hover:bg-blue-900'>
                Add to Cart
            </button>
            </div> 


             <div className='bg-white rounded-lg shadow p-4 text-center'>

            <img className='rounded-lg mb-4' src="/pulseBand.jpg" alt="Product2" />

            <h1 className='text-xl font-bold mb-2'>PulseBand X</h1>

            <p>A biometric wristband that monitors heart rate, stress levels, hydration, and sleep. </p>

            <p className='text-blue-500 mb-4'>$249.99</p>

            <button className='bg-blue-700 text-white shadow px-4 py-2 rounded hover:bg-blue-900'>
                Add to Cart
            </button>
            </div> 



             <div className='bg-white rounded-lg shadow p-4 text-center'>

            <img className='rounded-lg mb-4' src="/holodesk.jpeg" alt="Product3" />

            <h1 className='text-xl font-bold mb-2'>HoloDesk Mini</h1>

            <p> A portable holographic workstation that projects a 3D display above any surface allowing you to interact with files, apps, and media using simple hand gestures.</p>

            <p className='text-blue-500 mb-4'>$1,199.99</p>



            <button className='bg-blue-700 text-white shadow px-4 py-2 rounded hover:bg-blue-900'>
                Add to Cart
            </button>
            </div> 



             <div className='bg-white rounded-lg shadow p-4  text-center'>

            <img className='rounded-lg mb-4' src="/aetherpods.jpg" alt="Product4" />

            <h1 className='text-xl font-bold mb-2'>AetherPods</h1>

            <p> Wireless earbuds that use adaptive sound technology to automatically adjust audio based on your environment while also providing real time language translation.</p>

            <p className='text-blue-500 mb-4'>$179.99</p>

            <button className='bg-blue-700 text-white shadow px-4 py-2 rounded hover:bg-blue-900'>
                Add to Cart
            </button>
            </div> 


        </div>
      </div>
    </>
  )
}
