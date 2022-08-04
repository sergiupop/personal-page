import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />

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
