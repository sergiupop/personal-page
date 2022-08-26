import BioListItem from "./BioListItem";
import Card from "./Card";

const About = () => {
  const skills = ["React", "Next", "Redux", "Typescript", "Test1", "Test2", "Test3", "React", "Next", "Redux", "Typescript", "Test1", "Test2", "Test3", "React", "Next", "Redux", "Typescript", "Test1", "Test2", "Test3"];

  return (
    <section id="aboutSection" className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-5xl">ABOUT ME</h1>
      <p className="w-1/3">
        Hello! I'm Sergiu - husband, dad, full-stack developer based in <a className="hover:text-red-600" href="https://goo.gl/maps/Fbs7vEb95qTew27q6" target="_blank" rel="noreferrer">Cluj-Napoca, Romania</a>.
      </p>
      <article className="flex flex-col items-center justify-center">
        <h3>HOBBIES</h3>
        <ul>
          <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Tennis" />
          <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Coffee" />
          <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Reading" />
        </ul>
      </article>
      <article className="flex flex-col items-center justify-center">
        <h3>CORE VALUES</h3>
        <ul>
          <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Write clean code (advocate of the Software Craftsmanship manifesto - link)" />
          <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Pay attention to details (every pixel and every character matters)" />
          <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Understand what's under the hood (not only make it work, but understand why does it work the way it works)" />
        </ul>
      </article>
      <article className="flex flex-col items-center justify-center">
        <h3>SKILLS</h3>
        <div className="flex justify-evenly">
          <div className="flex gap-5 flex-wrap justify-evenly border-solid border-black border-2 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] p-5 w-1/4">
            {skills.map((item) => (<Card title={item} />))}
          </div>

          <div className="flex gap-5 flex-wrap justify-evenly border-solid border-black border-2 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] p-5 w-1/4">
            {skills.map((item) => (<Card title={item} />))}
          </div>
        </div>
      </article>
    </section>
  )
};

export default About;