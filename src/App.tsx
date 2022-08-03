import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Navbar />
      <section id="section1" style={{ height: "2000px" }}>
        SECTION 1
      </section>

      <section id="section2" style={{ height: "2000px" }}>
        SECTION 2
      </section>

      <section id="section3" style={{ height: "2000px" }}>
        SECTION 3
      </section>
    </>
  )
}

export default App;
