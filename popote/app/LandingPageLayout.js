import Nav from './components/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="container">{children}</main>
    </>
  );
}
