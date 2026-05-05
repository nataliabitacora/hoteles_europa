import { Instagram, Twitter, Facebook, Youtube, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-black mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary border-4 border-white rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter">Hoteles Europa</span>
            </div>
            <p className="text-sm font-bold leading-relaxed">
              Tu plataforma para descubrir Europa con estilo y a tu manera.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase text-sm tracking-wider mb-6">Explora</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm font-bold hover:text-primary transition-colors">Hoteles top</a></li>
              <li><a href="#" className="text-sm font-bold hover:text-primary transition-colors">Destinos</a></li>
              <li><a href="#" className="text-sm font-bold hover:text-primary transition-colors">Ofertas</a></li>
              <li><a href="#" className="text-sm font-bold hover:text-primary transition-colors">Eventos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-sm tracking-wider mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm font-bold hover:text-primary transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="text-sm font-bold hover:text-primary transition-colors">Carreras</a></li>
              <li><a href="#" className="text-sm font-bold hover:text-primary transition-colors">Prensa</a></li>
              <li><a href="#" className="text-sm font-bold hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-sm tracking-wider mb-6">Síguenos</h4>
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 bg-primary border-4 border-white rounded-xl flex items-center justify-center hover:bg-secondary hover:text-black transition-colors">
                <Instagram className="w-5 h-5" strokeWidth={3} />
              </a>
              <a href="#" className="w-12 h-12 bg-primary border-4 border-white rounded-xl flex items-center justify-center hover:bg-secondary hover:text-black transition-colors">
                <Twitter className="w-5 h-5" strokeWidth={3} />
              </a>
              <a href="#" className="w-12 h-12 bg-primary border-4 border-white rounded-xl flex items-center justify-center hover:bg-secondary hover:text-black transition-colors">
                <Facebook className="w-5 h-5" strokeWidth={3} />
              </a>
              <a href="#" className="w-12 h-12 bg-primary border-4 border-white rounded-xl flex items-center justify-center hover:bg-secondary hover:text-black transition-colors">
                <Youtube className="w-5 h-5" strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-white pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm font-bold">© 2026 Hoteles Europa. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm font-bold hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="text-sm font-bold hover:text-primary transition-colors">Términos</a>
            <a href="#" className="text-sm font-bold hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
