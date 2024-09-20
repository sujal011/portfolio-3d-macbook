import Hero from "./components/Hero"

function App() {
  
  return (
    <main className="flex justify-center items-center h-full w-full bg-black">
      <header></header>
      <section id="hero" className="flex justify-center items-center h-screen w-full">

        <Hero />
        {/* <h1 className="text-white">Sujal Bhavsar</h1> */}

      </section>
    </main>
  )
}

export default App
