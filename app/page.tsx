import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Container from "./components/Container";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 md:px-24 pt-5">
      <Container>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Experience />
      </Container>
    </main>
  );
}
