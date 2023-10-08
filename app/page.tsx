import Header from '@/components/header';
import ImageTrack from '@/components/image-track';

export default function Home() {
  return (
    <main className="h-full w-full bg-black px-4 lg:px-8 flex flex-col">
      <Header />
      <ImageTrack />
    </main>
  );
}
