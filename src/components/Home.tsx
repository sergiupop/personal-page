import selfImage from "../images/self.jpg";

const Home = () => {
  return (
    <section id="homeSection" className="flex items-center justify-center mt-20">
        <img src={selfImage} alt="developer" className="w-1/5 rounded-full"/>
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm <span className="text-red-600">Sergiu</span><span className="animate-waving-hand inline-block origin-[70%_70%]">🤚</span></h1>
          <h2 className="text-4xl font-bold">I'm a front-end developer.</h2>
        </div>
    </section>
  )
}

export default Home;