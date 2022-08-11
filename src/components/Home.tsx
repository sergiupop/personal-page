import selfImage from "../images/self.jpg";
import BioListItem from "./BioListItem";

const Home = () => {
  return (
    <section id="homeSection" className="flex items-center justify-center mt-20">
        <img src={selfImage} alt="developer" className="w-1/5 rounded-full"/>
        <article className="ml-8">
          <div>
            <h1 className="text-[3rem] leading-snug font-bold">
              Hi, I'm <span className="text-red-600">Sergiu</span><span className="animate-waving-hand inline-block origin-bottom">🖐</span>
            </h1>
            <h2 className="text-4xl font-bold">
              I'm a front-end developer.
            </h2>
          </div>
          <div className="ml-4 mt-4">
            <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Item1" />
            <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Item2" />
            <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Item3" />
          </div>
        </article>
    </section>
  )
}

export default Home;