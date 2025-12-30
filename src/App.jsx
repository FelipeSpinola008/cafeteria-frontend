import { Header } from "./components/Header"
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen">
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>
      <main>
        <Hero />
      </main>

    </div>
  );
}

export default App;