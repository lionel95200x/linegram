import Footer from '../footer';
import Header from '../header';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='relative flex-1'>
        <div className='relative h-full'>{children}</div>
      </main>
      <Footer />
    </>
  );
}
