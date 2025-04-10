import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/users/carousel">Carousel</Link>
    </nav>
  );
};

export default NavBar;
