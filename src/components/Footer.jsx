import { Linkedin, Mail, Github, User  } from "lucide-react"

export function Footer () {
    return (
        <footer id="contact" className="bg-[#30261C] text-white py-16 px-4 md:px-16 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-playfair italic text-white">CoffeeDev</h2>
                    <div className="flex gap-4 mt-1">
                        <a href="https://www.linkedin.com/in/felipespinola008/" target="_blank" rel="noreferrer"><Linkedin size={20} className="hover:text-amber-500 cursor-pointer transition-colors" /></a> 
                        <a href="mailto:Felipespinola784@gmail.com" target="_blank" rel="noreferrer"><Mail size={20} className="hover:text-amber-500 cursor-pointer transition-colors" /></a>
                        <a href="https://github.com/FelipeSpinola008" target="_blank" rel="noreferrer"><Github size={20} className="hover:text-amber-500 cursor-pointer transition-colors" /></a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Navegação</h3>
                    <ul className="flex flex-col gap-3 text-stone-400 text-sm">
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => document.getElementById('Hero')?.scrollIntoView({ behavior: 'smooth' })}>Início</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>Nossos Cafés</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Sobre Nós</li>
                        
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-6"> Contato</h3>
                    <ul className="flex flex-col gap-3 text-stone-400 text-sm">
                        <a href="https://www.linkedin.com/in/felipespinola008/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                            <Linkedin size={16} /> FelipeSpinola008
                        </a>
                        <a href="mailto:Felipespinola784@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                            <Mail size={16} /> Felipespinola784@gmail.com
                        </a>
                        <a href="" target="_blank" rel="noreferrer"  className="flex items-center gap-2 hover:text-white">
                            <User size={18}/>Administração
                        </a>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Atendimento</h3>
                    <p className="text-stone-400 text-sm">Segunda - Sexta: 08:00 às 20:00</p>
                    <p className="text-stone-400 text-sm mt-2">Sábado - Domingo: 09:00 às 18:00</p>
                    <button onClick={() => window.open('https://www.linkedin.com/in/felipespinola008/', '_blank')} className="mt-6 bg-amber-700 hover:bg-amber-600 text-white px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all">
                        Contratar serviços
                    </button>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-stone-800 mt-16 pt-8 text-center text-stone-500 text-xs">
                <p>&copy; {new Date().getFullYear()} CoffeeDev. Todos os direitos reservados. Feito com ❤️ por um Fullstack.</p>
            </div>
        </footer>
    )
}