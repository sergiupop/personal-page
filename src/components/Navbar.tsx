import Link from "./Link";

const Navbar = () => {
  return (
    <nav>
      <Link text="home" href="homeSection" />
      <Link text="about me" href="aboutMeSection" />
      <Link text="portfolio" href="portfolioSection" />
      <Link text="contact" href="contactSection" />
    </nav>
  )
}

export default Navbar;