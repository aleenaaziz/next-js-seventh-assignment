import React from 'react'

const Symptoms = () => {
  return (
    <div className='flex justify-between mx-32 my-20'>
      <div className='flex'>
        <img src="/image/symptoms.png" alt="" />
        <div>
             <h1 className='text-custompur font-bold'>Symptoms</h1>
             <p className='text-xs text-custompur'>Amet minim mollit non</p>
        </div>
      </div>
      <div className='flex'>
        <img src="/image/protection.png" alt="" />
        <div>
             <h1 className='text-custompur font-bold'>Protection</h1>
             <p className='text-xs text-custompur'>Amet minim mollit non</p>
        </div>
      </div>
      <div className='flex'>
        <img src="/image/security.png" alt="" />
        <div>
             <h1 className='text-custompur font-bold'>Security</h1>
             <p className='text-xs text-custompur'>Amet minim mollit non</p>
        </div>
      </div>
      <div className='flex'>
        <img src="/image/treatment.png" alt="" />
        <div>
             <h1 className='text-custompur font-bold'>Treatment</h1>
             <p className='text-xs text-custompur'>Amet minim mollit non</p>
        </div>
      </div>
    </div>
  )
}

export default Symptoms
