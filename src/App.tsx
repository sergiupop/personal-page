import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />

      <section id="contactSection" style={{ height: "2000px" }}>
        contact
      </section>
      
      <section id="portfolioSection" style={{ height: "2000px" }}>
        portfolio
      </section>
    </>
  )
}

export default App;
