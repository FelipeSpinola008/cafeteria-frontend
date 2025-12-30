import coffeBg from '../assets/coffeBg.png';
import { ShoppingCart, User } from 'lucide-react';

export function Hero() {
    return (
        <section className='relative h-screen w-full overflow-hidden bg-stone-950'>
            <div className='absolute inset-0 z-0'>
                <img 
                src={coffeBg}
                alt="espresso-surrounded-by-scattered-coffee-beans-dark-surface"
                className='h-full w-full object-cover opacity-80' 
                />
                <div className='absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/60 to-transparent' />
            </div>
            <div>
                <h2>
                    We serve the best coff of the city
                </h2>
            </div>
        </section>
    )
}