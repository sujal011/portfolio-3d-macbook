import Hero from "./components/Hero"
import Navbar from "./sections/Navbar"

function App() {
  
  return (
    <main className="flex justify-center items-center h-full w-full flex-col">
      <header></header>
      <nav className="w-full h-[20%]">

      <Navbar />
      </nav>
      <section id="hero" className="flex justify-center items-center h-screen w-full">

        <Hero />
        {/* <h1 className="text-white">Sujal Bhavsar</h1> */}

      </section>
    </main>
  )
}

export default App
