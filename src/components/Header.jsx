import { ShoppingCart, UserIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center justify-between bg-transparent pl-16 pr-20 pt-12 ">
      <div className="flex justify-between font-playfair text-white text-4xl font-bold"> 
        <div className="flex items-baseline gap-8">
          <a href="">CoffeeDev</a>
          <nav className="flex items-baseline gap-8 font-poppins text-white text-base font-light ">
            <a href="" className='hover:text-white-coffee transition-colors'>CAFÉS</a>
            <a href="" className='hover:text-white-coffee transition-colors'>PADARIA</a>
            <a href="" className='hover:text-white-coffee transition-colors'>SOBRE</a>
            <a href="" className='hover:text-white-coffee transition-colors'>CONTATO</a>
          </nav>
        </div>  
      </div> 
        <div className="flex items-center gap-10 font-poppins text-white text-base font-light">
          <a href="" className='hover:text-white-coffee transition-colors'><ShoppingCart size={22} strokeWidth={1.5} /></a>
          <a href="" className="flex items-center gap-3 hover:text-white-coffee transition-colors">
            <span className='mt-1 text-base font-light'>LOGIN</span>
          <UserIcon size={20} strokeWidth={2} />
          </a>
        </div>  
    </header>
  );
}