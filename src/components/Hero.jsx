import coffeBg from '../assets/coffeBg.png';


export function Hero() {
    return (
        <section className='relative h-screen w-full overflow-hidden bg-stone-950 flex items-center px-16'>
            <div className='absolute inset-0 z-0'>
                <img 
                src={coffeBg}
                alt="espresso-surrounded-by-scattered-coffee-beans-dark-surface"
                className='h-full w-full object-cover opacity-80' 
                />
                <div className='absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/60 to-transparent' />
            </div>
            <div className='relative z-10 max-2-3xl'>
                <span className='font-poppins text-sm tracking-[0.2em] text-white-coffee'>
                    Seja bem vindo!
                </span>
                <h1 className='font-playfair text-7xl md:text-8xl text-white leading-[1.1] mb-8'>
                    Nós temos o melhor <br />
                    <span className='italic font-light'>café da cidade </span>
                </h1>
                <p className='font-poppins text-lg text-stone-300 mb-10 max-w-lg leading-relaxed'>
                    Experimente a riqueza de grãos cuidadosamente selecionados e a torra perfeita em cada xícara.
                </p>

                <div>
                    <button className='bg-white-coffee text-stone-950 px-10 py-4 rounded-full font-poppins font-bold hover:bg-white transition-all shadow-lg transform hover:scale-105'>
                        PEÇA AGORA
                    </button>
                    <button></button>
                </div>
            </div>
        </section>
    )
}