import React from 'react'

const Balance = ({balance}) => {
  return (
    <div className='flex justify-center mt-10'>
      <div className='bg-[#1e293b] h-[120px] w-[250px] rounded-xl '>
        <h2 className='text-[#cbd5e1] text-center mt-5 text-2xl'>Your Balance :</h2>
        <h1 className='text-[#ef4444] text-3xl font-bold text-center mt-3'>{`₹${balance}`}</h1>
      </div>
    </div>
    

    
  )
}

export default Balance