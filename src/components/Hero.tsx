'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='mt-20'>
      <Image
        src='/Profile.jpeg'
        alt='me'
        width={300}
        height={300}
        priority={false}
      />
    </div>
  )
}
