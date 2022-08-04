import Link from "./Link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-evenly">
      <Link text="home" href="homeSection" />
      <Link text="about me" href="aboutMeSection" />
      <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" className="inline-block">
        <circle cx="50" cy="50" r="50" fill="red" />
      </svg>
      <Link text="portfolio" href="portfolioSection" />
      <Link text="contact" href="contactSection" />
    </nav>
  )
}

export default Navbar;