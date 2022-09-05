import { useState } from "react";
import selfImage from "../images/pyr.jpg";
import BioListItem from "./BioListItem";
import BrandIcon from "./BrandIcon";
import Modal from "./Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="homeSection" className="flex items-center justify-center h-[calc(100vh_-_6rem)] pb-24">
        <img src={selfImage} alt="developer" className="w-1/5 rounded-full"/>
        <div>
        </div>
        <article className="ml-8">
          <div>
            {/* <h1 className="text-[3rem] leading-snug font-bold">
              Hi, I'm <span className="text-red-600">Sergiu</span><span className="animate-waving-hand inline-block origin-bottom">🖐</span>
            </h1> */}
            <h1 className="text-[3rem] leading-snug font-bold">
              Hi
            </h1>
            <h2 className="text-4xl font-bold">
              I'm
            </h2>
          </div>
          <ul className="ml-4 mt-4">
            <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Item1" />
            <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Item2" />
            <BioListItem emoji={{ symbol: "🎾", label: "" }} text="Item3" />
            <BrandIcon iconName="twitter" />
            <button onClick={() => setIsModalOpen(true)}>Open Modal</button> 
            <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)}>This is modal content!</Modal>
          </ul>
        </article>
    </section>
  )
}

export default Home;