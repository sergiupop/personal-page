import Link from "./Link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-evenly">
      <Link href="homeSection">Go to home</Link>
      <Link href="aboutMeSection">Go to about me</Link>
      <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" className="inline-block">
        <circle cx="50" cy="50" r="50" fill="red" />
      </svg>
      <Link href="portfolioSection">Go to portfolio</Link>
      <Link href="contactSection">Go to contact</Link>
    </nav>
  )
}

export default Navbar;