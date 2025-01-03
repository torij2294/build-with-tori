import Navbar from '@/components/Navbar';
import OutOfOffice from '@/components/OutOfOffice';
// import Hero from '@/components/Hero';
// import SignupForm from '@/components/SignupForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream pb-12">
      <Navbar />
      <div className="max-w-md mx-auto">
      <OutOfOffice />
      </div>
    </main>
  );
}


{/* <Hero />
<SignupForm /> */}