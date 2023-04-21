import Image from 'next/image';
import profileImage from '/public/images/profile3.png';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className='text-center'>
      <Image className='rounded-full mx-auto' src={profileImage} alt='profile' height={150} width={150} priority />
      <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Kichan"}</h2>
      <h3 className='text-xl semi-bold'>{'Front end Engineer'}</h3>
      <p className='text-md'>{'next.js 를 공부합니다'}</p>
      <Link href='/contact'>
        <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>contact me</button>
      </Link>
    </section>
  );
}
