import Image from 'next/image';

import InfiniteText from '@/components/infinite-text';

export default function Home() {
  return (
    <main>
      <section className='relative flex h-screen overflow-hidden'>
        <Image
          src={'/hero-image.jpg'}
          fill
          alt='Hero image'
          className='object-cover'
          quality={100}
        />
        <div className='absolute bottom-5'>
          <InfiniteText />
        </div>
      </section>
      <section className='h-screen'></section>
    </main>
  );
}
