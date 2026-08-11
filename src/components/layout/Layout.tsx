import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from '../common/Container';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
      <Header />
      <main className="flex-grow">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};
