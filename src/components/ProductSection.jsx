import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function ProductSection({ items }) {
    const carouselRef = useRef(null);
    const scroll = (direction) => {
        if (carouselRef.current) {
            const { scrollLeft, clientWidth } = carouselRef.current;
            const scrollTo = direction === 'left' 
            ? scrollLeft - clientWidth 
            : scrollLeft + clientWidth;

    carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
  }
};

    return (
        <section id="products" className="relative bg-[#F5F5F5] py-16 px-4 md:px-16">
            <div className="text-center mb-12">
                <h2 className="font-playfair text-4xl italic text-amber-950 font-light">
                    Nossas especialidades
                </h2>
            </div>
            <div>
                 <button onClick={() => scroll('left')} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#E2D9C8] p-3 rounded-full shadow-md hover:bg-stone-300 transition-colors hidden md:flex">
                    <ChevronLeft size={24} className="text-stone-700" />
                </button>
                <button onClick={() => scroll('right')} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#E2D9C8] p-3 rounded-full shadow-m hover:bg-stone-300 transition-colors hidden md:flex" >
                    <ChevronRight size={24} className="text-stone-700" />
                </button>
            </div>

            <div ref={carouselRef} className="flex overflow-x-auto scroll-smooth gap-10 no-scrollbar pb-8">
                {items.map((item) => ( 
                    <div key={item.id} className="min-w-[300px] group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 flex flex-col">
                        <div className="relative h-64 overflow-hidden">
                            <button className="absolute top-4 right-4 z-10 text-stone-600 bg-white/50 p-2 rounded-full hover:text-red-500 hover:bg-white transition-all duration-300">
                                <Heart size={22}/>
                            </button>
                            <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="font-playfair text-xl font-bold text-stone-800 mb-2">
                                {item.name}
                            </h3>
                            <p className="font-poppins text-xs text-stone-500 italic mb-4 flex-grow">
                                {item.description}
                            </p>
                            
                            <div className="flex items-center justify-between mt-4">
                                <span className="font-poppins font-bold text-amber-900 text-lg">
                                    {item.price}
                                </span>
                            <button className="bg-stone-900 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-amber-900 transition-colors">
                                Pedir Agora
                            </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}