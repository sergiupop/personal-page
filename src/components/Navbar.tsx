import Link from "./Link";

const Navbar = () => {
  return (
    <nav>
      <Link text="section 1"/>
      <a href="#section2" style={{ marginRight: "20px" }}>
        Go to section 2
      </a>
      <a href="#section3">
        Go to section 3
      </a>
    </nav>
  )
}

export default Navbar;