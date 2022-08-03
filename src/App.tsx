import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <section id="homeSection" style={{ height: "2000px" }}>
        home
      </section>

      <section id="aboutMeSection" style={{ height: "2000px" }}>
        about me
      </section>

      <section id="portfolioSection" style={{ height: "2000px" }}>
        portfolio
      </section>

      <section id="contactSection" style={{ height: "2000px" }}>
        contact
      </section>
    </>
  )
}

export default App;
