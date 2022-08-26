import Link from "./Link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-evenly h-24">
      <Link href="homeSection">Go to home</Link>
      <Link href="aboutSection">Go to about me</Link>
      <Link href="portfolioSection">Go to portfolio</Link>
      <Link href="contactSection">Go to contact</Link>
    </nav>
  )
}

export default Navbar;