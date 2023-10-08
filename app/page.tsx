import Header from '@/components/header';
import dynamic from 'next/dynamic';
const ImageTrack = dynamic(() => import('../components/image-track'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-full w-full bg-black px-4 lg:px-8 flex flex-col">
      <Header />
      <ImageTrack />
    </main>
  );
}
