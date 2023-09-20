import Image from 'next/image';
import { LiquorSelection } from './(shared)/components/LiquorSelection';
import Navbar from './(shared)/Navbar';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center pt-24 p-6'>
      <Navbar />
      <LiquorSelection />
    </main>
  );
}
