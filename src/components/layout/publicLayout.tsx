import Footer from '../footer';
import Header from '../header';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='relative h-full'>{children}</div>
      <Footer />
    </>
  );
}
