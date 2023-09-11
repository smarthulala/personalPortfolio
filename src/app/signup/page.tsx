import React from 'react'

export default function page() {
  return (
    <div className='min-h-[800px] flex flex-col items-center justify-center gap-4'>
      <div className='text-5xl'>Sign up</div>
      <label htmlFor='email'>Email</label>
      <input
        type='text'
        placeholder='Email'
        className='rounded text-black dark:text-white p-2 focus:outline-none w-[300px] border'
      />
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        placeholder='Username'
        className='rounded text-black dark:text-white p-2 focus:outline-none w-[300px] border'
      />
      <label htmlFor='password'>Password</label>
      <input
        type='text'
        placeholder='Password'
        className='rounded text-black dark:text-white p-2 focus:outline-none w-[300px] border'
      />
      <button className='p-2 rounded border active:bg-amber-500 hover:bg-amber-600 text-center disabled:bg-gray-500'>
        Sign up
      </button>
      Already have an account?
      <button className='p-2 rounded border active:bg-amber-500 hover:bg-amber-600 text-center disabled:bg-gray-500'>
        Go to Login
      </button>
    </div>
  )
}
