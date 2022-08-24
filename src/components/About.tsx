import BioListItem from "./BioListItem";
import Card from "./Card";

const About = () => {
  const skills = ["React", "Next", "Redux", "Typescript", "Test1", "Test2", "Test3", "React", "Next", "Redux", "Typescript", "Test1", "Test2", "Test3", "React", "Next", "Redux", "Typescript", "Test1", "Test2", "Test3"];

  return (
    <section id="aboutSection" className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-5xl">ABOUT ME</h1>
      <article className="flex flex-col items-center justify-center border-2 border-indigo-600 w-1/3 shadow-2xl">
        <p>Hello! I'm Sergiu, a front-end developer from Cluj-Napoca. I love creating web applications with React, and I'm currently studying NodeJS. I still don't know if it's "front-end", "frontend, or "front end", and at this point I'm too afraid to ask.</p>
      </article>
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
          <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Clean code" />
          <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Attention to details" />
          <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Understanding the things under the hood" />
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