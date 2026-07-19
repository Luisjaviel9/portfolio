import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
export default function App() {
  return (
    <main className="min-h-screen bg-slate-900">

      <Navbar />

      <Hero />
     <About/>
    </main>
  );
}