import Image from 'next/image'

export default function Hero() {
  return (
    <div>
      <Image src='/Profile.jpeg' alt='me' width={300} height={300} />
    </div>
  )
}
