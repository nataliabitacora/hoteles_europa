import { Menu, MapPin } from 'lucide-react';
import { Button } from './Button';

export function NavigationBar() {
  return (
    <nav className="border-b-4 border-black bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary border-4 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <MapPin className="w-6 h-6 text-white" strokeWidth={3} />
            </div>
            <span className="text-2xl font-black uppercase tracking-tighter">Hoteles Europa</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="font-black uppercase text-sm tracking-wider hover:text-primary transition-colors">
              Hoteles
            </a>
            <a href="#" className="font-black uppercase text-sm tracking-wider hover:text-primary transition-colors">
              Destinos
            </a>
            <a href="#" className="font-black uppercase text-sm tracking-wider hover:text-primary transition-colors">
              Ofertas
            </a>
            <a href="#" className="font-black uppercase text-sm tracking-wider hover:text-primary transition-colors">
              Comunidad
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex">
              <Button variant="primary" size="sm">
                Reservar
              </Button>
            </a>
            <button className="md:hidden w-12 h-12 bg-secondary border-4 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Menu className="w-6 h-6 text-black" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
