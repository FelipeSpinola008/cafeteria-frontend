export function Header() {
  return (
    <header className="flex items-center justify-between bg-transparent pl-16 pr-16 pt-10 ">
      <div className="flex justify-between font-playfair text-amber-950 text-xl font-bold">
        <a href="">Cafeteria-dev</a>
      </div>
      <nav className="flex gap-8 font-poppins text-amber-950 text-sm font-extralight ">
        <a href="">HOME</a>
        <a href="">CAFÉS</a>
        <a href="">PADARIA</a>
        <a href="">CARRINHO</a>
        <a href="">SOBRE</a>
        <a href="">LOGIN</a>
      </nav>
    
        
    </header>
  );
}