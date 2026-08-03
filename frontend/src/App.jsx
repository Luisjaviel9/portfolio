import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Tecnologias from "./components/Tecnologias/Tecnologias";
import Proyectos from "./components/Proyectos/Proyectos";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import Formacion from "./components/Formacion/Forrmacion";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Layout from "./components/Layout/Layout";
export default function App() {
  return (
    <Layout>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Formacion />
        <Tecnologias />
        <Proyectos />
        <Contacto />
        <Footer />
        <ScrollTop />
      </main>
    </Layout>
  );
}