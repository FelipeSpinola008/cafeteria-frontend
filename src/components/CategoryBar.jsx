import { Coffee, CupSoda, CakeSlice, GlassWater } from "lucide-react";

export function CategoryBar() {
    const categories = [
        { id: 1, name: "Café Quente", icon: <Coffee size={32} /> },
        { id: 2, name: "Frappuccino", icon: <CupSoda size={32} /> },
        { id: 3, name: "Bebidas Geladas", icon: <GlassWater size={32} /> },
        { id: 4, name: "Sobremesas", icon: <CakeSlice size={32} /> },
    ];
    return (
        <section className="bg-[#E2D9C8] py-8 border-b border-stone-300">
            <div className="flex justify-center gap-20">
                {categories.map((cat) => (
                    <div key={cat.id} className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="text-stone-700 group-hover:text-stone-900 transition-colors">
                            {cat.icon}
                        </div>
                        <span className="font-poppins text-xs font-semibold text-stone-600 uppercase tracking-tighter">
                            {cat.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}