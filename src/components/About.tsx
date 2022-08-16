const About = () => {
  return (
    <section id="aboutSection" className="flex flex-col items-center justify-center mt-20">
      <h1>ABOUT ME</h1>
      <article className="flex flex-col items-center justify-center">
        <p>Hello! I'm Sergiu, a front-end developer from Cluj-Napoca. I love creating web applications with React, and I'm currently studying NodeJS.</p>
        <p>I still don't know if it's "front-end", "frontend, or "front end", and at this point I'm too afraid to ask.</p>
      </article>
      <article className="flex flex-col items-center justify-center">
        <h3>HOBBIES</h3>
        <ul className="flex flex-col items-center justify-center">
          <li>Tennis</li>
          <li>Coffee</li>
          <li>Reading</li>
        </ul>
      </article>
      <article className="flex flex-col items-center justify-center">
        <h3>CORE VALUES</h3>
        <ul className="flex flex-col items-center justify-center">
          <li>Clean code</li>
          <li>Start with why</li>
          <li>Helping is more important than achieving</li>
        </ul>
      </article>
      <article className="flex flex-col items-center justify-center">
        <h3>SKILLS</h3>
        <ul className="flex flex-col items-center justify-center">
          <li>DB</li>
          <li>BE</li>
          <li>FE</li>
        </ul>
      </article>
    </section>
  )
};

export default About;