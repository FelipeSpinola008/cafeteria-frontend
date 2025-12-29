import { Header } from "./components/Header"

function App() {
  return (
    <div>
      <header ><Header/></header>
      <main className="p-8">
        <h2 className="text-xl text-amber-800">Bem-vindo ao Menu</h2>
        <p className="mt-4">Aqui você poderá gerenciar seus cafés.</p>
      </main>
    </div>
      
  );
}

export default App;